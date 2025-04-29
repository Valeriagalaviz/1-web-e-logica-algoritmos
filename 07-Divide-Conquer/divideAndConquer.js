// Práctica 7. Divide y venceras
/*Función que utiliza el enfoque divide y venceras 
para encontrar el número máximo en un arreglo.*/
const findMax = (arr) => {
    // Caso base: El arreglo tiene un solo elemento
    if (arr.length === 1) {
        return  arr[0]; // Retornar el primer elemento
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2); /* calcular el punto medio */;
    const left = arr.slice(0, mid)  /* obtener la primera mitad */;
    const right = arr.slice(mid) /* obtener la segunda mitad */;

    // Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left) /* llamada recursiva */;
    const rightMax = findMax(right) /* llamada recursiva */;

    // Combinar las soluciones comparando los máximos
    return Math.max(leftMax, rightMax) /* máximo entre leftMax y rightMax */;
}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7, 12, 25];
console.log(`El número más grande es: ${findMax(numbers)}`); // Salida esperada: 10