import { Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";

function Home() {
  function notificacaoSucesso() {
    toast.success("Teste notificação com sucesso", {
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

  function notificacaoErro() {
    toast.error("Teste notificação com erro", {
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
  async function buscarProdutos() {
    try {
      const urlServidor = "http://localhost:5000";

      const response = await axios.get(`${urlServidor}/produtos`);
      setProdutos(response.data);
    } catch (error) {
      //CATCH caso tenha algum erro deve caiu no catch
      mensagemDeErro("Erro para buscar os produtos.");
    }
  }
  return (
    <Container>
      <Button variant="success" onClick={notificacaoSucesso}>
        Notificação Sucesso
      </Button>{" "}
      <Button variant="warning" onClick={notificacaoErro}>
        Notificação Erro
      </Button>
      <p>HOME</p>
    </Container>
  );
}

export { Home };
