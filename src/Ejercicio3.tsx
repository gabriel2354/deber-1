import React from 'react'

const Ejercicio3 = () => {
    const dividir= (arr: number[]): number[] => {
        return arr.map((element) => element / 5);

        const resultado = dividir(5);
    }
return (
    <div>
        <h3>calculo del area de un cuadrado</h3>
        <span>el resultado es: {dividir[5]} </span>
      
    </div>
  )
}

export default Ejercicio3
