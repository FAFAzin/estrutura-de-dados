export class Queue {
  //Construtor da classe
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

  //insere um elemento ao final da fila
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  //Remove o primeiro elemento da fila
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  //Verifica o primeiro elemento da fila
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
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
}

//Exemplo de como instanciar e usa-la
/**
 * const fila = new Queue();
 * fila.enqueue(10)
 * fila.clear()
 *  */
