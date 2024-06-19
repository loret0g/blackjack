// import {shuffle} from 'underscore';  Importa solo la función shuffle  
import _ from 'underscore';          // Importamos todo el paquete

import {crearDeck, pedirCarta, valorCarta, turnoPc, crearCartaHTML} from './usecases';   // Irá al index.js directamente

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasPc = document.querySelector('#pc-cartas');

const puntosHTML = document.querySelectorAll('small');

const modal = document.querySelector('#modal');

deck = crearDeck(tipos, especiales);

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
    
    const imgCarta = crearCartaHTML(carta);
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21) {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoPc(puntosJugador, puntosHTML[1], divCartasPc, deck);

    } else if(puntosJugador === 21){
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoPc(puntosJugador, puntosHTML[1], divCartasPc, deck);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoPc(puntosJugador, puntosHTML[1], divCartasPc, deck);
});

btnNuevo.addEventListener('click', () => {
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasPc.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

    modal.style.display = 'none';
});