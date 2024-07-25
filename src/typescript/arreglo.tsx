import React from 'react'

const Arreglo = () => {
    const sumarElementosArreglo= (arr: number[]): number => {
        let suma: number = 0;
        for (let i = 0; i < arr.length; i++) {
            suma += arr[i];

            let arreglo: number[] = [1, 2, 3, 4, 5]; 
            let resultado: number = sumarElementosArreglo(arreglo);

        

            return suma;

            

            return (
                <div>
                    <h3>calculo del area de un cuadrado</h3>
                    <span>el resultado es: {sumarElementosArreglo(0)} </span>
                
                </div>
            )
            }
            
            export default Arreglo