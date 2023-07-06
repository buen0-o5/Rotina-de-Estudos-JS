const rand = (max, min) =>Math.floor(Math.random() * (max-min) + min);
const geraMaiusculas = () => String.fromCharCode(rand(65,91));
const geraMinuscula = () => String.fromCharCode(rand(97,123));
const geraNumero = () => String.fromCharCode(rand(48,58));
const simbolos = ',.;^~[]!@#$%&*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiusculas,minuscula, numero, simbolo){
    const sanhaArray = [];
    qtd = Number(qtd);
    for(let i = 0; i < qtd; i ++){
        maiusculas && sanhaArray.push(geraMaiusculas())
        minuscula && sanhaArray.push(geraMinuscula())
        numero && sanhaArray.push(geraNumero())
        simbolo && sanhaArray.push(geraSimbolo())
    }
    return sanhaArray.join('').slice(0, qtd);
}



