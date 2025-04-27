// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
// Se remplazan funciones por arrow functions porque 
export const registrarDestino = (destino, fecha, transporte) =>{
    // Se sustituye var por const, ya que no se va a reasignar
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte) => {
    // Se sustituye var por let, ya que si cambia su valor dentro de la función
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
/*Se remplaza por forEach en lugar del ciclo for, esto para 
• Simplificar el código
• Mejorar la legibilidad
• Solo se necesita recorrer el arreglo de destinos*/

export function mostrarItinerario() {
    destinos.forEach((viaje) => {
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    });
}

