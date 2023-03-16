const braco = document.querySelector('#braco');

const controle = document.querySelectorAll('.controle-ajuste')

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
})

function manipulaDados(operacao) {
    if (operacao === "-") {
        if (parseInt(braco.value)>0) {
            braco.value = parseInt(braco.value) - 1
        }
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}

var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 


 