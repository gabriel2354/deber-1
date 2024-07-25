import React from 'react'

const Acumulador = () => {

    const [acumulador, setAcumulador] = useState(0);
    const incrementarAcumulador = () => {
        setAcumulador(acumulador + 1);
      };
      const disminuirAcumulador = () => {
        setAcumulador(acumulador - 1);
      };
    
      return (
        <div>
          <h2>Valor del acumulador: {acumulador}</h2>
          <button onClick={incrementarAcumulador}>Incrementar</button>
          <button onClick={disminuirAcumulador}>Disminuir</button>
        </div>
      );
    };
    





export default Acumulador;

