import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Encomendas from "./pages/Admin/Encomendas/Encomendas";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/encomendas" element={<Encomendas/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;
