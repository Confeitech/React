import { React, useState, useEffect } from 'react';
import styles from "./EncomendaCliente.module.css";
import NavBarCliente from "../../components/NavBarCliente/NavBarCliente";
import bolo from "../../utils/Detalhes/Bolo-Sensacao-01.webp";
import api from "../../api";
import { useNavigate } from 'react-router-dom';

const EncomendaCliente = () => {
    const [morangoData, setMorangoData] = useState([]);
    const [morangoDataUm, setMorangoDataUm] = useState([]);
    const [morangoDataDois, setMorangoDataDois] = useState([]);
    const [contadores, setContadores] = useState({}); // Estado para armazenar os contadores individuais
    const [preco, setPreco] = useState(0);
    const navigate = useNavigate();
    const [precoTela, setPrecoTela] = useState(0);
    const [observacoes, setObservacoes] = useState("");
    const [image, setimage] = useState();
    let index = sessionStorage.getItem("index");

    // Recuperar valores de adicionais
    useEffect(() => {
        api.get("/adicionais")
            .then((response) => {
                const { data } = response;
                setMorangoData(data);
                // Inicializar contadores com 0 para cada item
                const initialCounters = data.reduce((acc, item) => {
                    acc[item.id] = 0; // Supondo que cada item tem um campo "id"
                    return acc;
                }, {});
                setContadores(initialCounters);
            })
            .catch((error) => console.log(error));
    }, []);

    // Recuperar valores de bolos
    useEffect(() => {
        getBolo()
        api.get("/cakes")
            .then((response) => {
                const { data } = response;
                setMorangoDataUm(data);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        console.log(contadores);

        let total = 0;
        for (const [key, value] of Object.entries(contadores)) {
            const item = morangoData.find((data) => data.id === Number(key));
            if (item) {
                total += value * Number(item.preco);
            }
        }
        setPrecoTela(total + preco); // Atualiza o estado
    }, [contadores, preco]); // Adicione dependências relevantes

    useEffect(() => {
        api
        .get("/cakes/imagem/" + index, { responseType: "blob" })  // Alterado para GET e responseType "blob"
        .then((response) => {
            const imageUrl = URL.createObjectURL(response.data);  // Cria uma URL a partir do Blob
            setimage(imageUrl);  // Armazena a URL no estado
            console.log(imageUrl);
        })
        .catch((error) => {
            console.error("Erro ao buscar a imagem:", error);
        });
    }, [index]);

    // Função para incrementar o contador
    const incrementar = (id) => {
        setContadores((prev) => ({
            ...prev,
            [id]: prev[id] + 1,
        }));
    };

    // Função para decrementar o contador
    const decrementar = (id) => {
        setContadores((prev) => ({
            ...prev,
            [id]: prev[id] > 0 ? prev[id] - 1 : 0, // Evitar valores negativos
        }));
    };

    const getBolo = () => {


        api.get("/cakes/" + index)
            .then((response) => {
                const { data } = response;
                console.log(data);
                console.log(index)
                setMorangoDataDois(data);
                setPreco(data.preco);
                precoTela = data.preco;
                console.log(precoTela);
            })
            .catch((error) => console.log(error));
    }


    const goToCardapioDois = () => {
        let envio = {
            id: morangoDataDois.id,
            preco: precoTela,
            adicionais: contadores,
            observacoes: observacoes
        }
        sessionStorage.setItem("props", JSON.stringify(envio));
        navigate('/detalhesCliente'); // Redireciona para a página "/cardapio"
    };

    return (
        <>
            <NavBarCliente />
            <div className={styles["container_pai"]}>
                <div className={styles["container_foto"]}>
                    <img className={styles["bolofoto"]} src={image} />
                </div>

                <div className={styles["container_elementos"]}>
                    <h1 className={styles["container_titulo"]}>
                        {
                            morangoDataDois?.nome

                        }
                    </h1>
                    <p className={styles["container_paragrafo"]}>
                        {
                            morangoDataDois?.descricao
                        }
                    </p>

                    <p className={styles["dinheiro"]}>
                        <p>R$
                            {
                                precoTela.toFixed(2) // Exibe o preço formatado com 2 casas decimais
                            }
                        </p>

                    </p>

                    <div className={styles["container_encomenda"]}>
                        <p className={styles["paragrafoTamanho"]}>Tamanho:1,0Kg</p>
                        <button onClick={goToCardapioDois} className={styles["container_botao"]}>Encomendar</button>
                    </div>
                    {/* <div className={styles["container_lista"]}>
                        <button className={styles["container_kilos"]}>1.5Kg</button>
                        <button className={styles["container_kilos"]}>2.0Kg</button>
                        <button className={styles["container_kilos"]}>1.0Kg</button>
                        <button className={styles["container_kilos"]}>2.5Kg</button>
                    </div> */}

                    <h3 className={styles["naosei"]}>Adicionais</h3>
                    <div className={styles["container_paiAdicionar"]}>
                        {morangoData && morangoData.map((data) => (
                            <div key={data.id} className={styles["container_filhoAdicionar"]}>
                                <div className={styles["container_adicional"]}>
                                    <p className={styles["Morango"]}>
                                        {data.nome}: {data.preco.toFixed(2)}
                                    </p>
                                </div>
                                <div className={styles["container_botaoPaiAdicionarBanana"]}>
                                    <button
                                        onClick={() => incrementar(data.id)}
                                        className={styles["botaoAdicionar"]}
                                    >
                                        +
                                    </button>
                                    <div className={styles["num"]}>
                                        <p className={styles["paragrafoUm"]}>
                                            {contadores[data.id] || 0} {/* Exibe o contador correto */}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => decrementar(data.id)}
                                        className={styles["botaoAdicionar"]}
                                    >
                                        -
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p>Alguma observação?</p>
                    <div className={styles["container_ob"]}>
                        <div className="observacao">
                            <input className={styles["ob"]} type="text" onChange={(e) => setObservacoes(e.target.value)} placeholder="Ex: tenho intolerância a lactose, gluten etc. "></input>
                        </div>
                    </div>

                    <div className={styles["container_retirada"]}>
                        <p className={styles["container_gamb"]}>Lembrete: Pagamento na retirada</p>
                        <button onClick={goToCardapioDois} className={styles["container_botaodois"]}>Encomendar</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EncomendaCliente;
