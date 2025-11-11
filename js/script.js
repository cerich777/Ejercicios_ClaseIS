const x=10;
console.log(x);
//iteraciones

const cielo=document.getElementById("cielo");

for (let i=0; i<5; i++) {
    
    cielo.innerHTML += '⭐';
}

const planetas= ["🌍", "🪐", "🌕"]

for (const pleneta of planetas){
    cielo.innerHTML += pleneta;
}

let n=0
while (n<5) {
    cielo.innerHTML+=("☁️")
    n++
}

let m=0
do{
    cielo.innerHTML +=("🚀")
    m++
}while(m<4)
    
const btnEstrella = document.getElementById("btnEstrella");

btnEstrella.addEventListener("click", () => {
    cielo.innerHTML += "⭐";
});