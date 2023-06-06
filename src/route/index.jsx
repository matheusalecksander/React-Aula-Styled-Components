import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Produto } from "../pages/Produto";
import { Home } from "../pages/Home";
import { DetalhesProduto } from "../pages/DetalhesProduto";
import { Login } from "../pages/Login";
export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Produto />} />
        <Route path="/produtos/:id" element={<DetalhesProduto />} />
      </Routes>
    </BrowserRouter>
  );
}
