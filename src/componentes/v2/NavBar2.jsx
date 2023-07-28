import { Navbar, Nav, Container } from "react-bootstrap";

function NavBarV2(props) {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/v2/">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/v2/">Home</Nav.Link>
            <Nav.Link href="/v2/produto">Produtos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      {props.children}
    </Container>
  );
}

export default NavBarV2;
