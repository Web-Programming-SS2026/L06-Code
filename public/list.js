import Item from "./item.js";

class List {
  constructor() {
    this.form = document.forms.additem;
    this.input = this.form.item;
    this.list = document.querySelector("#list");
    this.clearButton = document.querySelector("#clearlist");
    this.items = [];

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.form.addEventListener("submit", this.handleAdd);
    this.clearButton.addEventListener("click", this.handleClear);
  }

  handleAdd(event) {
    event.preventDefault();

    let item = new Item(this.input.value, this.handleRemove);
    this.items.push(item);
    item.addToDOM(this.list);
    this.form.reset();
  }

  handleRemove(item) {
    this.items.splice(this.items.indexOf(item),1);
  }

  handleClear(event) {
    this.list.textContent = "";
    this.items = []
  }

}

window.list = new List();