export class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  //Verificar o tamanho da fila
  size() {
    return this.count - this.lowestCount;
  }
  //Verificar se a fila está vazia
  isEmpty() {
    return this.size() === 0;
  }
  //Limpar a fila
  clear() {
    this.items = 0;
    this.count = 0;
    this.lowestCount = 0;
  }
  //Retorno os elementos em forma de string
  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
  //Visualizar o último elemento do deque
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  //Visualizar o primeiro elemento do deque
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  //Remover o último elemento do deque
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  //Remover o primeiro elemento do deque
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  //Adicionar ao final do deque
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }
  //Adicionar elementos no início do deque
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
    }
    this.count++;
    this.lowestCount = 0;
    this.items[0] = element;
  }
}

//Exemplo de como instanciar e utilizar o Deque
/* const deque = new Deque();

deque.addFront(10);
deque.addBack(20); */
