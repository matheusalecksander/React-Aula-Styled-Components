import { StyledButton } from "./style";

export function CustomButton({
  texto,
  onClick,
  variante,
}) {
  return (
    <StyledButton variante={variante} onClick={onClick}>
      {texto}
    </StyledButton>
  )
}
