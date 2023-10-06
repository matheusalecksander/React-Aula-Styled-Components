import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  padding: 0 19.5rem;

  @media (max-width: 1370px) {
    padding: 0 10rem;
  }

  @media (max-width: 780px) {
    padding: 0 1rem;
  }
`;

export const Navbar = styled.nav`
  padding: 1.25rem 19.5rem;
  background-color: ${({ theme }) => theme.cores.background.escuro};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 1370px) {
    padding: 1rem 10rem;
  }

  @media (max-width: 780px) {
    padding: 1rem;
  }
`;

export const Brand = styled.a`
  color: ${({ theme }) => theme.cores.texto.branco};
  text-decoration: none;
  font-size: 1.25rem;
  transition: 0.2s color;

  &:hover {
    color: ${({ theme }) => theme.cores.texto.cinza};
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.cores.texto.cinza};
  text-decoration: none;
  transition: 0.2s color;

  &:hover {
    color: ${({ theme }) => theme.cores.texto.branco};
  }
`;

export const GerenciarLoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;

export const PageBody = styled.div`
  margin-top: 100px;
`;