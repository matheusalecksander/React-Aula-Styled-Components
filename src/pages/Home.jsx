import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../_service/api";
import { CardProduto } from "../componentes/CardProduto";

function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    try {
      const response = await api.get("/produtos");
      setProdutos(response.data);
    } catch (error) {
      mensagemDeErro("Erro para buscar os produtos.");
    }
  }

  function mensagemDeErro(mensagem = "Mensagem de erro") {
    toast.error(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <Container>
      <p>HOME</p>
      <hr />
      <Row>
        {produtos.map((produto, index) => {
          return (
            <Col className="m-2">
              <CardProduto
                nome={produto.nome}
                preco={produto.preco}
                linkImagem={produto.linkImagem}
                descricao={produto.descricao}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export { Home };
