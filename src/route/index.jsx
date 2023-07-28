import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Produto } from "../pages/Produto";
import { Home } from "../pages/Home";
import { DetalhesProduto } from "../pages/DetalhesProduto";
import { Login } from "../pages/Login";
import { BaseSistema } from "./v2/BaseSistema";
import { MinhaRotas, TuasRotas } from "./v2/MinhaRotas";
export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/v2/*" element={<BaseSistema componente={MinhaRotas} />} />

        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Produto />} />
        <Route path="/produtos/:id" element={<DetalhesProduto />} />
      </Routes>
    </BrowserRouter>
  );
}
