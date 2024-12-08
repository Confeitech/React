import React, { useState, useEffect } from "react";
import styles from "./RelatorioAdmin.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import GraficoArea from "../../../components/GraficoArea/GraficoArea";
import GraficoBarra from "../../../components/GraficoBarra/GraficoBarra";
import api from "../../../api";
import { useNavigate } from "react-router-dom";

const RelatorioAdmin = () => {
    const [cardsData, setCardsData] = useState();
    const [totalSemana, setTotalSemana] = useState(0);
    const [aceitasData, setAceitasData] = useState();
    const [grafico1, setGrafico1] = useState();
    const [grafico2, setGrafico2] = useState();
    const [hoje, setHoje] = useState(0);
    const today = new Date();
    
    const Navigate = useNavigate();

    useEffect(() => {
        api.get("/dashboard")
            .then((response) => {
                console.log(response.data);
                const { data } = response;
                setCardsData(data);

                const total = data.graficoVendasSemana?.reduce((acc, curr) => acc + curr, 0);
                setGrafico1(total || 0);

                const grafico1 = data.graficoVendidoSemana?.reduce((acc, curr) => acc + curr, 0);
                setGrafico2(grafico1 || 0);
            })
            .catch((error) => {
                console.log(error);
            });

        api
            .get("/encomendas/aceitas")
            .then((response) => {
                const { data } = response;
                setAceitasData(data);

                const encomendasHoje = data.filter(
                    (item) => item.dataRetirada === today.toISOString().split("T")[0]
                ).length;
                setHoje(encomendasHoje);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const Change = () => {Navigate("/encomendas")}

    return (
        <div className={styles["body"]}>
            <NavBarAdmin />
            <div className={styles["content"]}>
                <div className={styles["field"]}>
                    <div className={styles["row"]}>
                        <div className={styles["card"]}>
                            <div className={styles["block"]}>
                                <h4 className={styles["titulo"]}>Quantidade de encomendas para hoje</h4>
                                <h1 className={styles["textoAmarelo"]}>{hoje}</h1>
                                <h5 className={styles["textoAmarelo"]}>Quantidade próxima do limite</h5>
                            </div>
                        </div>
                        <div className={styles["card"]}>
                            <div className={styles["block"]}>
                                <h4 className={styles["titulo"]}>Quantidade de solicitações não confirmadas</h4>
                                <h1 className={styles["textoAzul"]}>{cardsData?.qtdEncomendasNaoAceitasSemana}</h1>
                                <a className={styles["link"]} onClick={Change}>Visualizar</a>
                            </div>
                        </div>
                        <div className={styles["cardRelatorio"]}>
                            <div className={styles["block"]}>
                                <h2 className={styles["h2Baixar"]}>Resumo do mês</h2>
                                <button className={styles["buttonBaixar"]}>Baixar</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles["row"]}>
                        <div className={styles["card"]}>
                            <div className={styles["block"]}>
                                <h4 className={styles["titulo"]}>Maior movimentação de encomendas</h4>
                                <h2 className={styles["textoAzul"]}>{cardsData?.movimentacaoSemana}</h2>
                            </div>
                        </div>
                        <div className={styles["card"]}>
                            <div className={styles["block"]}>
                                <h4 className={styles["titulo"]}>Quantidade de encomendas na semana</h4>
                                <h1 className={styles["textoVerde"]}>{totalSemana}</h1>
                                <h5 className={styles["textoVerde"]}>Cresceu 12% com base na semana anterior</h5>
                            </div>
                        </div>
                        <div className={styles["card"]}>
                            <div className={styles["block"]}>
                                <h4 className={styles["titulo"]}>Bolo mais vendido</h4>
                                <h2 className={styles["textoAzul"]}>{cardsData?.boloMaisVendido}</h2>
                            </div>
                        </div>
                    </div>
                    <div className={styles["big"]}>
                        <div className={styles["grafico"]}>
                            <h2>Quantidade de vendas por dia da semana</h2>
                            <GraficoArea data={cardsData?.graficoVendasSemana || []} />
                        </div>
                        <div className={styles["grafico"]}>
                            <h2>Bolo mais vendido da semana</h2>
                            <GraficoBarra data={cardsData?.graficoVendidoSemana || []}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatorioAdmin;
