// Crie uma função chamada multiplyList que receba um array de números, um multiplicador e devolva a multiplicação de cada elemento do array pelo multiplicador. Exemplo:
//([1, 2, 3, 4, 5] , 3) deve retornar [3, 6, 9, 12, 15]



let multiplicaArray = [1, 2, 3, 4, 5]
result = multiplyList(multiplicaArray, 4)
console.log(result)

function multiplyList(array, multiplier){
  return array.map(x => x * 3)
}
