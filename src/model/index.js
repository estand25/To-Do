/**
 * ItemObj - Item to be done
 * @param {*} id - Indentifier for item
 * @param {*} name - Name of item
 * @param {*} description - Description of item to do done
 * @param {*} dueDate - Item due date
 * @param {*} isCompleted - If the item has been completed or not
 */
function ItemObj(id, name, description, dueDate, isCompleted){
    this.id = id;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.isCompleted = isCompleted
}

export {
    ItemObj
}