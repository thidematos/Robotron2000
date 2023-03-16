const robotronOi = document.querySelector('.robo')

robotronOi.addEventListener("click", dizOi);

robotronOi.addEventListener("click", (evento) => {
    console.log(evento)
})

function dizOi(nome){
    console.log(`oi, ${nome}`);
}
 