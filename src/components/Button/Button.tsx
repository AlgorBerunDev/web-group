import "./Button.css";

interface ButtonProps {
  type?: "default" | "primary" | "secondary" | "link" | "dashed";
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ type = "default", onClick, children }) => {
  return (
    <button className={`btn btn--${type}`} onClick={onClick}>
      {children}
    </button>
  );
};
