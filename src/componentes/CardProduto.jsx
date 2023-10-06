import { useContext } from "react";
import { Card } from "react-bootstrap";
import { CarrinhoContext } from "../hooks/CarrinhoContext";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "./StyledButton";

function CardProduto({ idProduto, nome, preco, descricao, linkImagem }) {
  const { adicionarCarrinho } = useContext(CarrinhoContext);
  let navigate = useNavigate();

  function adicionarNoCarrinho(
    idProduto,
    nomeProduto,
    precoProduto,
    descricaoProduto,
    linkImagemProduto
  ) {
    const token = localStorage.getItem("token");
    if(!token){
      navigate("/login");
    }

    adicionarCarrinho({
      idProduto,
      nomeProduto,
      descricaoProduto,
      precoProduto,
      linkImagemProduto,
    });
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={linkImagem} />
      <Card.Body>
        <Card.Title>
          {nome} - R$: {preco}
        </Card.Title>
        <Card.Text>{descricao}</Card.Text>
        <CustomButton
          onClick={() =>
            adicionarNoCarrinho(idProduto, nome, preco, descricao, linkImagem)
          }
          texto="ADICIONAR"
          variante="primario"
        />
      </Card.Body>
    </Card>
  );
}

export { CardProduto };
