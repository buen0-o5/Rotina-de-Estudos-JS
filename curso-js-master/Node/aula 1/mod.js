const nome = 'Pitty';
const sobrenome = 'Aniceto';

const falaNome = () => {
    console.log(nome, sobrenome);
};

//primeira forma de exportar com o node
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;


module.exports.chata = 'Pitty';
this.qualquerCoisa = 'O que quises exporta';
console.log(exports);

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

}
exports.Pessoa = Pessoa
