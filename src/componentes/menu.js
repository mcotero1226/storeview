import React from "react";
import { useState } from "react";
import "../css/menu.css"
import { useContext } from "react";
import { Contexto } from "../context/crearcontext";

function Menu() {
  const nuevo=useContext(Contexto)
  return (
    <nav className="menu">
      <button className="button-menu">𝕸𝖊𝖓𝖚</button>
      <ul className="menu-list">
        <li>Ropa</li>
        <li>Electrónica</li>
        <li>Juguetes</li>
        <li>{nuevo}</li>
      </ul>
    </nav>
  );  
}

export default Menu;
