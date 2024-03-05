import { ButtonProps } from "./Button.props";
import { StyledButton } from "./Button.styled";

export const Button: React.FC<ButtonProps> = ({ type = "default", onClick, children }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
