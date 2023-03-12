const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado()

        selecionarBotaoClicado(botao)

        escoderImagemAtiva()

        mostrarImagemDeFundo(indice)
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa')
}

function selecionarBotaoClicado(botao) {
    botao.classList.add('selecionado')
}

function escoderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.remove('ativa')
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}
