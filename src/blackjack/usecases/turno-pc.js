import { pedirCarta, valorCarta, crearCartaHTML } from ".";

/**
 * Turno del PC
 * @param {Number} puntosMinimos    Puntos mínimos que necesita el PC para ganar
 * @param {HTMLElement} puntosHTML  Elemento para mostrar en pantalla los puntos
 * @param {HTMLElement} divCartasPC Elemento para mostrar las cartas en pantalla
 * @param {Array<String>} deck 
 */

export const turnoPc = (puntosMinimos, puntosHTML, divCartasPC, deck = []) => {
    if(!puntosMinimos) throw new Error('puntosMinimos son necesarios');
    if(!puntosHTML) throw new Error('puntosHTML son necesarios como argumento');

    let puntosPc = 0;

    const mensaje = (mensaje) => {
        modal.style.display = 'block';
        modal.innerHTML = `<p> ${mensaje} </p>`;
    };

    do {
        const carta = pedirCarta(deck);

        puntosPc = puntosPc + valorCarta(carta);
        puntosHTML.innerText = puntosPc;
        
        const imgCarta = crearCartaHTML(carta);
        divCartasPC.append(imgCarta);

        if(puntosMinimos > 21) {
            break;
        }

    } while((puntosPc < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosPc === puntosMinimos) {
            mensaje('¡EMPATE!');
        } else if (puntosMinimos > 21) {
            mensaje('¡HAS PERDIDO!');
        } else if (puntosPc > 21) {
            mensaje('¡HAS GANADO!');
        } else if (puntosPc > puntosMinimos) {
            mensaje('¡HAS PERDIDO!');
        }
    }, 100);
}