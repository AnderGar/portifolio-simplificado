/*Objetivo 1 - quando o usuario clicar no botao "mostar mais", deve abrir os projetos que estao escondidos no html

    Passo 1 - pegar o botao "mostrar mais" no JS pra poder verificar quando o usuario clicar em cima dele

    Passo 2 - Identificar o clique no botao

    Passo 3 - Adicionar a classe "ativo" nos projetos escondidos
   
 Objetivo 2 - esconder o botao de "mostrar mais"
    
    Passi 1 - Pegar o botao e esconder ele
 */

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {

    mostarMaisProjetos();

    esconderBotao();

});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}
