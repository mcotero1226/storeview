import React, { createContext, useMemo } from "react";
import { useState } from "react";
import "../css/cards.css"
import {useEffect} from "react";
import Carito from "./carito";
import useStore from "../zustan/zustantex";
import { Losmejore } from "../context/estadomejores";
import { useContext } from "react";


function Card ({nombre,descripcion,img,precio,estadoC,estrellas,masdescripcion, onAddToCart,descuentos}){
    const mejores=useContext(Losmejore)

    const[topcard,settopcard]=useState(0)
    const[descripcionComponet,setdescripcionComponet]=useState(descripcion)
    const {increment,decrement,reset,counter}=useStore() 
       
    const leermas=()=>{
        setdescripcionComponet(masdescripcion)
    }
    const leermenos=()=>{
        setdescripcionComponet(descripcion)
    }
    useEffect(()=>{
        console.warn("alo peroo")     
    },[topcard])    

    
    const contadortop=()=>{
        if(topcard<estrellas){
            settopcard(topcard+1)   
        }
    }
    const priv = () => {
    if (estadoC === "Privado") {
          console.warn("Este Articulo Esta Privado")
        }else{
         onAddToCart()
        };
    };

   
    return(
         <>
         <div className="card-container">
            <div class="card">
            <div class="badge" style={{backgroundColor:"blue"}}>{estadoC}</div>
            <div class="tilt">
            </div>
            <img/>
            <div class="info">
            <h2 class="title">{nombre}</h2>

            <img class="img" src={img}/>
            <p class="desc">{descripcionComponet}</p>
            <button class="btn" onClick={leermas}>leer mas</button>
            <dir></dir>
            <button class="btn" onClick={leermenos} >leer menos</button>
             <h3>El valor es {counter}</h3>
            <button class="btn" onClick={increment} >increment</button>
            <button class="btn" onClick={decrement} >decrement</button>
            <button class="btn" onClick={reset} >reset</button>


            

            <div class="feats"> 
            </div>
            <div class="bottom">
            <div class="price">
                <span class="old">$2,499</span>
                <span class="new">{precio}</span>
            </div>
            <button class="btn">
                <span onClick={priv}>COMPRA</span>
                <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
            </button>
              <button  class="btn" onClick={contadortop}>Estrella</button>
            <button class="btn" style={{}} >{descuentos}%</button>

            </div>
            <div class="meta">
            <div class="rating">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span class="rcount">#{topcard}</span>
            </div>
            <div class="stock">In Stock</div>
            <div class="btn">{mejores}</div>
            </div>
            </div>
            </div>
        </div>   
    </>

    );
}
export default Card