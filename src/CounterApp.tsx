import { FC, useState } from "react";

interface CounterAppProps {
  value: number;
}

const CounterApp: FC<CounterAppProps> = ({ value }) => {
  const [counter, setCounter] = useState<number>(value);

  const handleClickUp = () => {
    setCounter(counter + 1);
  };

  const handleClickDown = () => {
    setCounter(counter - 1);
  };

  const handleClickReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter} </h2>

      <button onClick={handleClickUp}>+ 1</button>
      <button onClick={handleClickDown}>- 1</button>
      <button onClick={handleClickReset}>Reset</button>
    </>
  );
};

export default CounterApp;
