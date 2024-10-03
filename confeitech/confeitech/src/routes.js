import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Encomendas from "./pages/Admin/Encomendas/Encomendas";
import Cardapio from "./pages/Admin/Cardapio/Cardapio";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/encomendas" element={<Encomendas/>}></Route>
                    <Route path="/cardapio" element={<Cardapio/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;
