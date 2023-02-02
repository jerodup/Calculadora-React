import { Boton } from "./components/Boton";
import { Pantalla } from "./components/Pantalla";
import { BotonClear } from "./components/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    try {
      if (input) {
        setInput(evaluate(input));
      } else {
        alert("Por favor ingrese una operación");
      }
    } catch (error) {
      setInput("syntax error");
    }
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton agregarInput={agregarInput}>1</Boton>
          <Boton agregarInput={agregarInput}>2</Boton>
          <Boton agregarInput={agregarInput}>3</Boton>
          <Boton agregarInput={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton agregarInput={agregarInput}>4</Boton>
          <Boton agregarInput={agregarInput}>5</Boton>
          <Boton agregarInput={agregarInput}>6</Boton>
          <Boton agregarInput={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton agregarInput={agregarInput}>7</Boton>
          <Boton agregarInput={agregarInput}>8</Boton>
          <Boton agregarInput={agregarInput}>9</Boton>
          <Boton agregarInput={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton agregarInput={calcularResultado}>=</Boton>
          <Boton agregarInput={agregarInput}>0</Boton>
          <Boton agregarInput={agregarInput}>.</Boton>
          <Boton agregarInput={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear borrar={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
