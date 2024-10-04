import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Encomendas from "./pages/Admin/Encomendas/Encomendas";
import Cardapio from "./pages/Admin/Cardapio/Cardapio";
import RelatorioAdmin from "./pages/Admin/RelatoriosAdmin/RelatorioAdmin";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/encomendas" element={<Encomendas/>}></Route>
                    <Route path="/cardapio" element={<Cardapio/>}></Route>
                    <Route path="/relatorioAdmin" element={<RelatorioAdmin/>}></Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;
