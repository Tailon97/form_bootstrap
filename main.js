const formulario = document.getElementById('form-cadastro');
const mensagemSucesso = document.getElementById('mensagem-sucesso');
const botaoFechar = document.getElementById('fechar-mensagem');
const container = document.querySelector('.container');

formulario.addEventListener('submit', function (event) {
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