import { GerenciarLogin } from "./GerenciarLogin";
import {
  Brand,
  GerenciarLoginContainer,
  LinksContainer,
  NavLink,
  Navbar,
  PageBody,
  PageContainer,
} from "./NavBar.style";

function NavBar(props) {
  return (
    <PageContainer>
      <Navbar>
        <Brand href="/home">E-Commerce</Brand>
        <LinksContainer>
          <NavLink href="/home">Home</NavLink>
          <NavLink href="/produtos">Produtos</NavLink>
        </LinksContainer>
        <GerenciarLoginContainer>
          <GerenciarLogin />
        </GerenciarLoginContainer>
      </Navbar>
      <PageBody>{props.children}</PageBody>
    </PageContainer>
  );
}

export default NavBar;

