import React from 'react';
import Header from './componentes/header';
import Menu from './componentes/menu';
import Buscar from './componentes/buscar';
import Card from './componentes/cartas';
import camisa from './img/camisa.jpg'
import tenis from'./img/tenis.jpg'
import reloj from './img/reloj.jpg'
import Carito from './componentes/carito';
import {useState} from "react";
import Footer from './componentes/footer';
import whasapo from './img/WhatsApp.jpg'
import ig from'./img/ig.jpg'
import { Contexto } from './context/crearcontext';
import { Losmejore } from './context/estadomejores';

function App() {
    const [carritoCount, setCarritoCount] = useState(0);

    const handleAddToCart = () => {
      setCarritoCount(carritoCount + 1);
    };

    const borarCarito=()=>{
      setCarritoCount(0)

    };
    
    
  return (
    <div className="App">
      <Header/>
      <Contexto.Provider value={"Motos"}>
      <Menu/>
      </Contexto.Provider>
      <Buscar/>
      <Carito carito={carritoCount} vaciar={borarCarito}/>
      <Losmejore.Provider value={"Los Mejores"}>
      <Card nombre="𝕮𝖆𝖒𝖎𝖘𝖆 𝕮𝖑𝖆𝖘𝖎𝖈𝖆 𝕭𝖑𝖆𝖓𝖈𝖆" 
            descripcion="Camisa Clásica" 
            masdescripcion="Ideal para cualquier ocasión. Tela fresca, 100% algodón. Disponible en todas las tallas."

            img={camisa} clase='Ropa'
            precio={45000}
            estadoC='Aprovado'
            estrellas={5}
            onAddToCart={handleAddToCart}
            descuentos={15} 
            />

      <Card nombre="𝕿𝖊𝖓𝖎𝖘 𝖀𝖗𝖇𝖆𝖓𝖔𝖘 𝖃𝕿𝕽"
            descripcion="Tenis Urbanos"
            masdescripcion="Diseño moderno con suela antideslizante. Perfectos para uso diario o deporte casual."
            img={tenis} clase='Ropa' 
            precio={35000}
            estadoC='Privado'
            estrellas={5}
            onAddToCart={handleAddToCart} 
            descuentos={15} 


            />

      <Card nombre="𝕽𝖊𝖑𝖔𝖏 𝕯𝖊𝖕𝖔𝖗𝖙𝖎𝖛𝖔 𝕯𝖎𝖌𝖎𝖙𝖆𝖑" 
           descripcion="Reloj"
          masdescripcion="Resistente al agua, incluye cronómetro y luz LED. ¡Ideal para entrenamientos!"
           img={reloj} clase='Electronica'
           precio={50000}
           estadoC='Aprovado'
           estrellas={5}
           onAddToCart={handleAddToCart} 
           descuentos={20} 

           />
      </Losmejore.Provider>

          <Footer
         whasapo={whasapo}
          ig={ig}

          
          />
    </div>
  );
}

export default App;
