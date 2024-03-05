import { Increment } from "./components/Incerement";
import { useIncrement } from "./hooks/useIncrement";

function App() {
  const incrementState = useIncrement(10);

  return <Increment increment={incrementState.increment} onIncrement={incrementState.handleIncrement} />;
}

export default App;
