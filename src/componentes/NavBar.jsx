
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar(props) {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      {props.children}
    </Container>
  );
}

export default NavBar;
