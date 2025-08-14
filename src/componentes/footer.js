import React from "react";
import "../css/footer.css"

function Footer({wha}){
    return(
        <>
        <footer>
        <div className="footer">
            <div class="footer-section">
                <h2>Contactenos</h2>
                <p>Esta página es una interfaz web diseñada para gestionar un carrito de compras de manera interactiva y 
                    visualmente atractiva. Permite al usuario agregar productos, ver la lista de ítems seleccionados, visualizar 
                    el total de la compra y vaciar el carrito con un solo clic. Su diseño es limpio, moderno y funcional, 
                    con una estructura clara que facilita la experiencia de usuario. El estilo incluye bordes redondeados, 
                    sombras suaves y un esquema de 
                    colores que resalta las acciones principales, como eliminar todos los productos
                </p>
            </div>
            <div class="footer-section">
                <h3>Enlaces A Cuentas</h3>
                <ul>
                    <li><a href="https://web.whatsapp.com"> DALE = Whasapo</a></li>
                    <li><a href="https://www.instagram.com"> DALE = ig</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contacto</h3>
                <p>Email: contacto@tienda.com</p>
                <p>Tel: +57 300 000 0000</p>
            </div>      
        </div>
        </footer>
        </>
    )

}
export default Footer