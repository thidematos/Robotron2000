
    const atributos = {
        "bracos": {
            "forca": 29,
            "poder": 35,
            "energia": -21,
            "velocidade": -5
        },
        "blindagem": {
            "forca": 41,
            "poder": 20,
            "energia": 0,
            "velocidade": -20
        },
        "nucleos":{
            "forca": 0,
            "poder": 7,
            "energia": 48,
            "velocidade": -4
        },
        "pernas":{
            "forca": 27,
            "poder": 21,
            "energia": -32,
            "velocidade": 43
        },
        "foguetes":{
            "forca": 0,
            "poder": 28,
            "energia": 0,
            "velocidade": -2
        }
    }

const controle = document.querySelectorAll('[data-controle]')

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');
    if (operacao === "-") {
        if (parseInt(peca.value)>0) {
            peca.value = parseInt(peca.value) - 1
        }
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}



 