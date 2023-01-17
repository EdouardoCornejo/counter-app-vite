import { MouseEvent, FC, useState } from "react";

interface CounterAppProps {
  value: number;
}

const CounterApp: FC<CounterAppProps> = ({ value }) => {
  const [counter, setCounter] = useState<number>(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter} </h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterApp;
