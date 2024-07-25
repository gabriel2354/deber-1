import React from 'react'

const Ejercicio4 = () => {
 

type Alumno = {
    nombre: string;
    edad: number;
    calificaciones: number[];
};

const alumnos: Alumno[] = [
    { nombre: "Juan", edad: 20, calificaciones: [85, 90, 88] },
    { nombre: "María", edad: 21, calificaciones: [92, 87, 95] },
    { nombre: "Pedro", edad: 22, calificaciones: [78, 85, 80] }
];

function calcularPromedioCalificaciones(arr: Alumno[]): number  {
    let totalCalificaciones = 0;
    let totalAlumnos = arr.length;
};
let promedio = totalCalificaciones / (totalAlumnos * arr[0].calificaciones.length); {


    return promedio;
}

let promedioCalificaciones = calcularPromedioCalificaciones(alumnos);

return (
    <div>
      <span>el resultado es: {promedio(alumnos)} </span>
    </div>
  )
}