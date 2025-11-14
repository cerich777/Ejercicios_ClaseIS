let carrito =JSON.parse(localStorage.getItem("CarritodeCompras")) || []

const ListaCarrito = document.getElementById("ListaCarrito");

if (carrito.length > 0) {
    renderCarrito();
}

function renderCarrito(){
    ListaCarrito.innerHTML ="";
    carrito.forEach(nombre=>{
        const li =document.createElement("li");
        li.textContent=nombre;
        ListaCarrito.appendChild(li);
    })

}

contenedor.addEventListener("click", e=>{
    if(e.target.tagName=="BUTTON"){
        const nombre=e.target.parentElement.querySelector("h3").textContent;
        carrito.push(nombre);
        localStorage.setItem("CarritodeCompras", JSON.stringify(carrito));


        renderCarrito();
    }
})