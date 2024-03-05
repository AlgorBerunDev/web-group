export interface ButtonProps {
  type?: "default" | "primary" | "secondary" | "link" | "dashed";
  onClick?: () => void;
  children?: React.ReactNode;
}
