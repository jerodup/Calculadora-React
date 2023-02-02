import "../styles/Boton.css";

export const Boton = (props) => {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };
  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.agregarInput(props.children)}
    >
      {props.children}
    </div>
  );
};
