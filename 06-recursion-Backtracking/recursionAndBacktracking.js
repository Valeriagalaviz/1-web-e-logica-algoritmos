// Práctica 6. Recursión y Backtracking
// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// TODO: Completa esta función para que busque recursivamente el regalo en la lista
const findGift = (gifts, giftName, index = 0) =>{
    // Caso base: Si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
    //Caso base: Si encontramos el regalo
    if (gifts[index] === giftName){
        return  `${giftName} esta en la posición: ${index}.`;
    }
    // llamada recursiva
    return findGift(gifts, giftName, index + 1);
}
// Casos de ejemplo:
// Llama a la función con los datos de entrada y muestra el resultado en la consola.
// Llama a la función y prueba con diferentes regalos
console.log(findGift(gifts, "Lego"));
// Salida esperada:
// "Lego está en la posición 3."
console.log(findGift(gifts, "Carro de juguete"));
// Salida esperada:
// "Pelota está en la posición 2."

// Caso cuando el regalo no está en la lista
console.log(findGift(gifts, "Camión"));
// Salida esperada:
// "Camión no está en la lista."