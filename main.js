const formulario = document.getElementById('form-cadastro');
const mensagemSucesso = document.getElementById('mensagem-sucesso');
const botaoFechar = document.getElementById('fechar-mensagem');
const container = document.querySelector('.container');

const checkboxTermos = document.getElementById('aceito-termo');

formulario.addEventListener('submit', function (event) {
    if (!checkboxTermos.checked) {

        alert('Por favor, aceite os termos de uso para continuar.');
        
        event.preventDefault();
        
        return; 
    }
    event.preventDefault();

    formulario.style.display = 'none';
    mensagemSucesso.style.display = 'block';

    container.classList.add('form-oculto');
});

botaoFechar.addEventListener('click', function () {
    mensagemSucesso.style.display = 'none';
    formulario.style.display = 'block';

    container.classList.remove('form-oculto');

    formulario.reset();
});