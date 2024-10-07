import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Encomendas from "./pages/Admin/Encomendas/Encomendas";
import Cardapio from "./pages/Admin/Cardapio/Cardapio";
import NavBarCliente from "./components/NavBarCliente/NavBarCliente";
import EncomendaCliente from "./pages/Cliente/EncomendaCliente";
import Detalhes from "./pages/Cliente/Detalhes/Detalhes";
import Retirada from "./pages/Cliente/Retirada/Retirada";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/encomendas" element={<Encomendas/>}></Route>
                    <Route path="/cardapio" element={<Cardapio/>}></Route>
                    <Route path="/encomendaCliente" element={<EncomendaCliente/>}></Route>
                    <Route path="/detalhesCliente" element={<Detalhes/>}></Route>
                    <Route path="/retiradaCliente" element={<Retirada/>}></Route>
                    


                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;
