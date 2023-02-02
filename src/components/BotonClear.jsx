import "../styles/BotonClear.css";
export const BotonClear = (props) => {
  return (
    <div className="boton-clear" onClick={props.borrar}>
      {props.children}
    </div>
  );
};
