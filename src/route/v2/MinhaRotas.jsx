import { Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../../componentes/ListaProdutos";
import { Home2 } from "../../pages/v2/Home2";

function MinhaRotas() {
  return (
    <Routes>
      <Route path="/" element={<Home2 />} />
      <Route path="/produto" element={<ListaProdutos />} />
    </Routes>
  );
}

export { MinhaRotas };
