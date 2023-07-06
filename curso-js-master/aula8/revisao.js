let nome = 'Pitty';
let anoNasc = CalcIdade(2014);
let altura = 1.64;
let peso = 65;
let imc = CalcImc();

function CalcIdade(datanascimento){
    var anoAtual = new Date();
    var ano = anoAtual.getFullYear();
    datanascimento
    return ano - datanascimento;
}

function  CalcImc(){
    calc = peso / (altura * altura);
    return  calc.toFixed(2)
}

function Situacao(imc){
    if(imc < 18.5){
        return 'Abaixo do pesp';
    }
    else if(imc >= 18.5 && imc < 29.9 ){
        return 'Peso ideal';
    }
    else{
        return 'Acima do peso';
    }
}

console.log(`
Nome: ${nome}
Peso: ${peso}kg
Altura: ${altura}
IMC: ${imc}
Situaçao: ${Situacao(imc)};
`)