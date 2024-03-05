import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.props";

const buttonStyles = {
  default: css``,
  primary: css`
    background-color: #007bff;
    color: white;
    border-color: #007bff;
  `,
  secondary: css`
    background-color: #6c757d;
    color: white;
    border-color: #6c757d;
  `,
  link: css`
    background-color: transparent;
    color: #007bff;
    border-color: transparent;
  `,
  dashed: css`
    border-style: dashed;
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  padding: 6px 15px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  ${props => props.type && buttonStyles[props.type]}
`;
