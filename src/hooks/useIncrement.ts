import { useState } from "react";

export const useIncrement = (initialState: number = 0) => {
  const [increment, setIncrement] = useState(initialState);
  const handleIncrement = () => setIncrement(currentIncrement => currentIncrement + 1);

  return {
    increment,
    handleIncrement,
  };
};
