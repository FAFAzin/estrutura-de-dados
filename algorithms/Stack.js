// @ts-check

export default class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  //inserir um elemento no topo da pilha
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  //Retirar o elemento do topo da pilha
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  //Visualizar o elemento que está no topo da pilha
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  //Verificar se a pilha está vazia, se estiver vazia retorna true
  isEmpty() {
    return this.count === 0;
  }
  //Verificar o tamanho da pilha
  size() {
    return this.count;
  }
  //Limpa a pilha
  clear() {
    /* while (!this.isEmpty()) {
        this.pop();
      } */
    this.items = {};
    this.count = 0;
  }
  //Exibi todos os elementos da pilha em forma de strings
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
