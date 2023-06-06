import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row
} from "react-bootstrap";
import "../assets/css/login.css";

function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

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
                // rounded
              />
            </Col>
            <Col md={6} className="box">
              <h1 className="text-center">E-COMMERCE HARVE</h1>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
