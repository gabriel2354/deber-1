import React from 'react'

const Calculo = () => {
    const calcularArea= (lado:number): number => {
        let area: number = lado * lado;
        return area;
        
        
    

    }
return (
    <div>
        <h3>calculo del area de un cuadrado</h3>
        <span>el resultado es: {calcularArea(5)} </span>
    
    </div>
)
}

export default Calculo
