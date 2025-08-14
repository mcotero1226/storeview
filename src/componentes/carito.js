import React from "react";
import "../css/carito.css"
import Card from "./cartas";

function Carito({carito,vaciar}){
    return(
        <>
        <div class="carrito">
        <h2>𝕮𝖆𝖗𝖗𝖎𝖙𝖔 𝖉𝖊 𝕮𝖔𝖒𝖕𝖗𝖆𝖘</h2>
        <ul id="lista-productos">
        </ul>
        <div class="total">
            Total: <span id="total-compra">{carito}</span>
        </div>
        <button id="vaciar-carrito" onClick={vaciar}>Vaciar carrito</button>

        </div>
        </>

    );
};
export default Carito
