import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Encomendas from "./pages/Admin/Encomendas/Encomendas";
import Cardapio from "./pages/Admin/Cardapio/Cardapio";
import RelatorioAdmin from "./pages/Admin/RelatoriosAdmin/RelatorioAdmin";
import NavBarCliente from "./components/NavBarCliente/NavBarCliente";
import EncomendaCliente from "./pages/Cliente/EncomendaCliente";
import Detalhes from "./pages/Cliente/Detalhes/Detalhes";
import Retirada from "./pages/Cliente/Retirada/Retirada";
<<<<<<< HEAD
import CardapioCliente from "./pages/Cliente/cardapioC/cardapioCliente"
=======
import NovoBolo from "./pages/Admin/NovoBolo/NovoBolo";
import ModificarBolo from "./pages/Admin/ModificarBolo/ModificarBolo";
>>>>>>> 022f90f58c4bac17e4da02fe60853f7e181c5108

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
<<<<<<< HEAD
                    <Route path="/cardapioCliente" element={<CardapioCliente />}></Route>

=======
                    <Route path="/novo-bolo" element={<NovoBolo />}></Route>
                    <Route path="/modificar-bolo" element={<ModificarBolo />}></Route>
        
>>>>>>> 022f90f58c4bac17e4da02fe60853f7e181c5108
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;
