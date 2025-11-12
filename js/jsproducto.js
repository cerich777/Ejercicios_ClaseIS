//Componente mejorado

const productos =[
    {nombre:"Escudo", precio:50, img:"https://www.record.com.mx/sites/default/files/inline-images/R%C3%89CORD%283258%29.jpg" },
    {nombre:"Jugador", precio:100, img:"https://www.record.com.mx/sites/default/files/inline-images/Imago-1661819.jpg"},
    {nombre:"Carro", precio:1500, img:"https://ksportusa.com/wp-content/uploads/2020/02/nissan-silvia.jpg"},
    {nombre:"Mapache", precio:3000, img:"https://wl-genial.cf.tsp.li/resize/728x/jpg/9e9/8b1/344df85df3aad82d1a9464c52a.jpg"}
]

const contendor = document.getElementById("contenedor");


productos.forEach( prod =>{
    const card = document.createElement("div");
    card.className="card";
    card.innerHTML=`
    <img src="${prod.img}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>${prod.precio}</p>
    <button>Agregar</button>
    `
    contendor.appendChild(card)
})

