// Implementar la función insertAndSort que recibe un arreglo y un objeto y retorna
// un arreglo ordenado de menor a mayor con los números del array y con
// los números de los valores del objeto.
// Para el ordenamiento NO usar la función sort de JavaScript. Deben usar alguno de los
// algoritmos de ordenamiento que se vieron en clase.
// Ejemplo:
// insertAndSort([4,8,13], {a:2, b:1, c:5}) ----> Debería retornar [1, 2, 4, 5, 8, 13]

function insertAndSort(array, obj) {
  // Tu código acá
  var array = [] ; 
  for (var indice in obj  ) {
    array.push(obj[indice])
  }
  for ( var i = 0 ; i < array.length ; i++) { 
    array.push(array[i])
  }
  for (var i = 1 ; i < array.length ; i++) {
    var aux = array[i] ; 
    var j = i -1 ; 
    while( j >= 0 && array[j] > aux ) {
      array[j+1] = array[j] ; 
      j = j -1 } 
      array[j + 1] = aux ;  
    }
  }


//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;
