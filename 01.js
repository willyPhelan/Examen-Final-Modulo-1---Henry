const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
  // Tu código aca:
  var min;
  if (this.head === null) return false ; 
  for (var i = 0; i < this.length; i++) {
    min = i;
    for (var j = i + 1; j < this.length; j++) {
      if (this[j] < this[min]) {
        min = j;
      }
    }

    if(min !== i){
      var aux = this[min];
      this[min] = this[i];
      this[i] = aux;
    }
  }
  return this;
}


// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList
};