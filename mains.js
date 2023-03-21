const cadeado = document.querySelector('.bxs-lock-alt');
const senha = document.getElementById('senha');

cadeado.addEventListener('click', () => {
    if(senha.type == 'text'){
        senha.type = 'password';
    } else{
        senha.type = 'text';
    }
});