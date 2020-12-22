import store from "../../store/store";
import { createHtmlElement } from "../../utils";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

export default class TodoList {
    render = (): HTMLElement => {
        const container = createHtmlElement("div", null, {
            class: "todoList",
        });

        const formContainer = createHtmlElement("div", null, {
            class: "todoList__container--small",
        });

        const newTodoForm = new NewTodoForm();
        formContainer.appendChild(newTodoForm.render());

        const todosContainer = createHtmlElement("div", null, {
            class: "todoList__container--large",
        });

        const state = store.getState();
        state.todos.forEach((todo: { id: string; description: string; isComplete: boolean }) => {
            const todoObject = new Todo(todo.id, todo.description, todo.isComplete);
            todosContainer.appendChild(todoObject.render());
        });

        container.appendChild(formContainer);
        container.appendChild(todosContainer);
        return container;
    };
}
