import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Encomendas from "./pages/Admin/Encomendas/Encomendas";
import Cardapio from "./pages/Admin/Cardapio/Cardapio";
import RelatorioAdmin from "./pages/Admin/RelatoriosAdmin/RelatorioAdmin";
import NavBarCliente from "./components/NavBarCliente/NavBarCliente";
import EncomendaCliente from "./pages/Cliente/EncomendaCliente";
import Detalhes from "./pages/Cliente/Detalhes/Detalhes";
import Retirada from "./pages/Cliente/Retirada/Retirada";
import CardapioCliente from "./pages/Cliente/cardapioC/cardapioCliente"
import MinhasEncomendas from "./pages/Cliente/MinhasEncomendasC/MinhasEncomendas"
import NovoBolo from "./pages/Admin/NovoBolo/NovoBolo";
import ModificarBolo from "./pages/Admin/ModificarBolo/ModificarBolo";
import Ingredientes from "./pages/Admin/Ingredientes/Ingredientes";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/encomendas" element={<Encomendas />}></Route>
                    <Route path="/cardapio" element={<Cardapio />}></Route>
                    <Route path="/relatorioAdmin" element={<RelatorioAdmin />}></Route>
                    <Route path="/encomendaCliente" element={<EncomendaCliente />}></Route>
                    <Route path="/detalhesCliente" element={<Detalhes />}></Route>
                    <Route path="/retiradaCliente" element={<Retirada />}></Route>
                    <Route path="/cardapioCliente" element={<CardapioCliente />}></Route>
                    <Route path="/minhasEncomendas" element={<MinhasEncomendas />}></Route>
                    <Route path="/novo-bolo" element={<NovoBolo />}></Route>
                    <Route path="/modificar-bolo" element={<ModificarBolo />}></Route>
                    <Route path="/ingredientes" element={<Ingredientes />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;
