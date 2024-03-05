import { Button } from "./Button";
interface IncrementProps {
  increment: number;
  onIncrement: () => void;
}

export const Increment: React.FC<IncrementProps> = ({ increment, onIncrement }) => {
  return (
    <div>
      <h1>Increment: {increment}</h1>
      <Button type="link" onClick={onIncrement}>
        Increment 2
      </Button>
    </div>
  );
};
