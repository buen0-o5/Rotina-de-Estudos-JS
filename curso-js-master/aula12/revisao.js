//           Desafio 
//criar 3 let com os valores A, B C
//opos isso atribuir A = B, B = C, C = A 

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C';//A

/*Para solucionar esse desafio foi necessario fazer a desestruturação 
de array para atribuir novos valores às variáveis.Um nova array 
[varB, varC, varA] é criada
A atribuição ocorre simultaneamente. O valor de varB é atribuído a varA, o 
valor de varC é atribuído a varB e o valor de varA é atribuído a varC.
Após a atribuição, os valores das variáveis foram trocados circularmente.
Agora, varA contém o valor originalmente em varB (ou seja, 'B'), varB contém 
o valor originalmente em varC (ou seja, 'C') e varC contém o valor 
originalmente em varA (ou seja, 'A'). */
[varA, varB, varC] = [varB, varC, varA];
const [a, b, c] = [1, 2, 3];

console.log(a, b, c)