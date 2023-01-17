import { FC } from "react";

  
interface FisrtAppAppProps {
  message: string;
  title: string;
}
const newMessage = {
  message: "Hola Mundo",
  name: "Eduardo ",
};

const getRestul = (a:number,b:number) => {
  return a + b;
};

const FisrtApp: FC<FisrtAppAppProps> = ({ title, message }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{message}</p>
      <h2>Expresion de js: </h2>
      <h3>{getRestul(10,2)}</h3>
      {/* <code>{JSON.stringify(newMessage)}</code>   */}
    </>
  );
};

export default FisrtApp;
