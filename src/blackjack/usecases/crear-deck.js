// Tiene dependencias, como los 'tipos' y 'especiales' - Los pasamos por parámetros para solucionarlo
import _ from "underscore";

/**
 * Esta función crea una nueva baraja
 * @param {Array<String>} tiposCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Devuelve un nuevo deck
 */

export const crearDeck = (tiposCarta, tiposEspeciales) => {
// Controlando los posibles errores que se pueden producir en JS:
    if (!tiposCarta || tiposCarta.length === 0) 
        throw new Error ('tiposCarta es obligatorio como un array de string');

    if (!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error ('tiposEspeciales es obligatorio como un array de string');
        
    let deck = [];

    for(let i = 2; i <= 10; i++) {
        for(let tipo of tiposCarta) {
            deck.push( i + tipo);
        }
    }

    for(let tipo of tiposCarta) {
        for(let esp of tiposEspeciales) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}