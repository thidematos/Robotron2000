const botao = document.querySelector('#calcular')

const resultado = document.querySelectorAll('.resultado')

botao.addEventListener("click", () => {
    for (ind = 0; ind < resultado.length; ind++){
        resultado[ind].innerText = 'Eu fui clicado!'
    }
})