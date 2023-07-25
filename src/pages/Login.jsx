import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import "../assets/css/login.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import api from "../_service/api";

function Login() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  let navigate = useNavigate();

  function onchangeEmail(event) {
    setEmail(event.target.value);
  }
  function onchangeSenha(event) {
    setSenha(event.target.value);
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

  function mensagemDeSucesso(mensagem = "") {
    toast.success(mensagem, {
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
  async function submitForm(event) {
    event.preventDefault();
    setValidated(true);

    const form = new FormData();
    form.append("email", email);
    form.append("password", senha);
    const options = {
      method: "POST",
      mode: "no-cors",
      body: form,
    };

    fetch(
      "https://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
      options
    )
      .then((response) => response)
      .then((data) => {
        mensagemDeSucesso("sucesso");
  
      })
      .catch((error) => {
        console.log(error);
        mensagemDeErro("Não foi possivel realizar login");
      });
  }

  return (
    <Container>
      <Row style={{ marginTop: "13%" }}>
        <Col md={1}></Col>
        <Col md={10}>
          <Row>
            <Col md={6} style={{ padding: "0%" }}>
              <Image
                src="https://apa.az/storage/news/2023/march/09/big/6409d74615a996409d74615a9a16783665346409d74615a926409d74615a93.jpg"
                width="100%"
                height="100%"
              />
            </Col>
            <Col md={6} className="box">
              <h1 className="text-center">E-COMMERCE HARVE</h1>
              <Form noValidate validated={validated} onSubmit={submitForm}>
                <Row style={{ margin: "7%" }}>
                  <Col>
                    <Form.Group controlId="validationEmail">
                      <Form.Label>E-mail</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputEmail">@</InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="E-mail"
                          aria-describedby="inputEmail"
                          required
                          onChange={onchangeEmail}
                        />
                        <Form.Control.Feedback type="invalid">
                          Adicionar um email valido.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                <Row style={{ margin: "7%" }}>
                  <Col>
                    <Form.Group controlId="validationCustomUsername">
                      <Form.Label>Senha</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputSenha">*</InputGroup.Text>
                        <Form.Control
                          type="password"
                          placeholder="Senha"
                          aria-describedby="inputSenha"
                          required
                          onChange={onchangeSenha}
                        />
                        <Form.Control.Feedback type="invalid">
                          Senha é obrigatorio.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                <Row style={{ margin: "7%" }}>
                  <Col className="d-grid gap-2">
                    <Button type="submit" size="lg">
                      Login
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export { Login };
