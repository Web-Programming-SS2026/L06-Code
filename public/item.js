export default class Item {
  constructor(content, listener) {
    this.element = document.createElement("li");
    this.element.textContent = content;
    this.deleteButton = document.createElement("button");
    this.deleteButton.textContent = "delete";
    this.element.append(this.deleteButton);
    this.itemDeleteHandler = listener;

    this.handleDelete = this.handleDelete.bind(this);
    this.deleteButton.addEventListener("click",this.handleDelete);
  }

  handleDelete(event) {
    this.element.remove();
    this.itemDeleteHandler(this);
  }

  addToDOM(list) {
    list.append(this.element);
  }
}
