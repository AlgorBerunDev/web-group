import { Button } from "antd";

interface IncrementProps {
  increment: number;
  onIncrement: () => void;
}

export const Increment: React.FC<IncrementProps> = ({ increment, onIncrement }) => {
  return (
    <div>
      <h1>Increment: {increment}</h1>
      <Button onClick={onIncrement}>Increment</Button>
    </div>
  );
};
