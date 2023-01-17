import React from "react";
import ReactDOM from "react-dom/client";
import App from "./HelloWorldApp";
import FirstApp from "./FisrtApp";
import './styles.css'
import CounterApp from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App 
      message={"Hola mundo"}
      subTitle={123}
    /> */}
    {/* <FirstApp 
        title={"First App"} 
        message={'Este es un mensaje'}
    /> */}
    <CounterApp
    value={0}
    />
  </React.StrictMode>
);