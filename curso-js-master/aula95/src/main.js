import GeraCpf from './modules/GeraCpf';
import './assets/css/style.css';

const btn = document.querySelector('.btn');
btn.addEventListener('click',(e)=>{
 e.preventDefault();
 const gera = new GeraCpf();
 const cpfGerado = document.querySelector('.cpf-gerador');
cpfGerado.innerHTML = gera.geraNovoCpf();
})

//Funçao que executa automaticamente
// (function(){
//     const gera = new GeraCpf();
//     const cpfGerado = document.querySelector('.cpf-gerador');
//     cpfGerado.innerHTML = gera.geraNovoCpf();
// })();



