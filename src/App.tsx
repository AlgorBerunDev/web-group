import { Flex } from "antd";
import { TodoContainer } from "./features/todo/containers/TodoContainer";

function App() {
  return (
    <Flex gap={10} vertical>
      <TodoContainer />
      <TodoContainer />
    </Flex>
  );
}

export default App;
