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
  if (!this.head) {
    return false;
  } else {
    let array = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    array.sort(function (i, j) {
      return j - i;
    });

    let current2 = this.head;
    while (current2) {
      current2.value = array.shift();
      current2 = current2.next;
    }
  }
};
  
  // Tu código ac

// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList
};