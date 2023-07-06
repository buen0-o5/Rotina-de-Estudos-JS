import geraSenha from  './gerador';

const qtdCaractere = document.querySelector('.qtd-caractere')
const senhaGerado = document.querySelector('.senha-gerada');
const checkMaiuscula = document.querySelector('.chk-maiusculas');
const checkMmnuscula = document.querySelector('.chk-minusculas');
const checkNumero = document.querySelector('.chk-numeros');
const checkSimbolo = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');



export default () =>{
    gerarSenha .addEventListener('click',()=>{
        senhaGerado.innerHTML = gera();
    });
};

function gera(){
    const senha = geraSenha(
        qtdCaractere.value,
        checkMaiuscula.checked,
        checkMmnuscula.checked,
        checkNumero.checked,
        checkSimbolo.checked,
    )
    return senha || 'Nada selecionado.';
}