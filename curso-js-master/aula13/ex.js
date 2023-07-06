function removeDuplicatas(array) {
    return array.filter((elemento, indice) => array.indexOf(elemento) === indice);
  }
  // verifica se um valor está presente no array. Se o valor for encontrado,
// ele retorna o índice da primeira ocorrência desse valor no array. Caso contrário, retorna -1.
  
  const numeros = ['A','A','B','A'];
  const resultado = removeDuplicatas(numeros);
  console.log(resultado); // Deve imprimir [1, 2, 3, 4, 5]
  