import { Button } from "react-bootstrap";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  background-color: ${({ theme, variante }) => theme.cores.botao.background[variante]};
  color: ${({ theme, variante }) => theme.cores.botao.texto[variante]};
  border: none;

  &:hover {
    background-color: ${({ theme, variante}) => theme.cores.botao.background.hover[variante]};
    color: ${({ theme, variante}) => theme.cores.botao.texto.hover[variante]};
  }
`;
