"use strict";

(function () {
  //! Создаем и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement("h2");
    appTitle.textContent = title;
    return appTitle;
  }
  //!Создаем и возвращаем форму для создания дела
  function createTodoItemForm() {
    let form = document.createElement("form"),
      input = document.createElement("input"),
      buttonWrapper = document.createElement("div"),
      button = document.createElement("button");

    form.classList.add("input-group", "mb-3");
    input.classList.add("form-control");
    input.placeholder = "Введите название нового дела";
    button.classList.add("btn", "btn-primary");
    button.textContent = "Добавить дело";

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  }

  //!Создаем и возвращаем список элементов
  function createTodoList() {
    let list = document.createElement("ul");
    list.classList.add("list-group");
    return list;
  }

  function createTodoItem(name) {
    let item = document.createElement("li"),
      buttonGroup = document.createElement("div"),
      doneButton = document.createElement("button"),
      deleteButton = document.createElement("button");

    item.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    item.textContent = name;

    buttonGroup.classList.add("btn-group", "btn-group-sm");
    doneButton.classList.add("btn", "btn-success");
    doneButton.textContent = "Готово";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.textContent = "Удалить";

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return {
      item,
      doneButton,
      deleteButton,
    };
  }

  document.addEventListener("DOMContentLoaded", () => {
    let container = document.getElementById("todo-app");

    let todoAppTitle = createAppTitle("Список дел");
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();
    // let todoItems = [
    //   createTodoItem("Сходитьза хлебом"),
    //   createTodoItem("Купить молоко"),
    // ];

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);
    // todoList.append(todoItems[0].item);
    // todoList.append(todoItems[1].item);

    todoItemForm.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!todoItemForm.input.value) {
        return;
      }
      let todoItem = createTodoItem(todoItemForm.input.value);

      todoItem.doneButton.addEventListener("click", () => {
        todoItem.item.classList.toggle("list-group-item-success");
      });

      todoItem.deleteButton.addEventListener("click", () => {
        if (confirm("Вы уверены?")) {
          todoItem.item.remove();
        }
      });

      todoList.append(todoItem.item);

      todoItemForm.input.value = "";
    });
  });
})();
