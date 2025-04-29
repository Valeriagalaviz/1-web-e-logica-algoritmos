const findLongestWord = (text) =>{
    // Dividir el texto en palabras 
    const words = text.split(' ');
    //console.log(words);
    let longestWord = ''; // Inicializar la palabra más larga

    //Recorrer el arreglo de palabras con un ciclo
    for (let i= 0; i < words.length; i++) {
        // Comprobar si la palabra actual es la más larga
        if (words[i].length > longestWord.length) {
            // Actualizar la palabra más larga
            longestWord = words[i];
        }
    }
    // Retornar la palabra más larga encontrada
    return longestWord;
}


// Seleccionar el elemento HTML donde se mostrara el resultado
const texto = document.getElementById('text');
const boton = document.querySelector('button');
const result = document.getElementById('result');

// Agregar un event listener al boton
boton.addEventListener('click', () => {
    if (texto.value === '') {
        alert('Debes ingresar un texto');
        return;
    }else{
        // Obtener el texto ingresado
        const text = texto.value;
        const longestWord = findLongestWord(text);
        // Llamar a la función y mostrar el resultado
        result.textContent = `La palabra mas larga es: ${longestWord}`; 
        console.log(longestWord);
    }
})
