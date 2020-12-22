import store from "../../store/store";
import { todoRemoved, todoToggled } from "../../store/todos/actions";
import { createHtmlElement } from "../../utils";

export default class Todo {
    private todoDescription: HTMLElement;
    private todo: HTMLElement;
    private toggleTodoButton: HTMLElement;
    private removeTodoButton: HTMLElement;

    constructor(id: string, description: string, isComplete: boolean) {
        this.todoDescription = createHtmlElement("div", description, {
            class: isComplete
                ? "todo__description todo__description-completed"
                : "todo__description",
        });

        this.toggleTodoButton = createHtmlElement("button", "Toggle", {
            class: isComplete ? "todo__button todo__button--completed" : "todo__button",
            id,
        });

        this.toggleTodoButton.addEventListener("click", this.toggleTodo);

        this.removeTodoButton = createHtmlElement("button", "Remove", {
            class: "todo__button todo__button--danger",
            id,
        });
        this.removeTodoButton.addEventListener("click", this.removeTodo);

        this.todo = createHtmlElement("div", "", {
            class: "todo",
        });

        this.todo.appendChild(this.todoDescription);
        this.todo.appendChild(this.toggleTodoButton);
        this.todo.appendChild(this.removeTodoButton);
    }

    toggleTodo = (e: Event) => {
        if (e.target !== null) {
            store.dispatch(todoToggled((e.target as HTMLButtonElement).id));
        }
    };

    removeTodo = (e: Event) => {
        if (e.target !== null) {
            store.dispatch(todoRemoved((e.target as HTMLButtonElement).id));
        }
    };

    render = (): HTMLElement => {
        return this.todo;
    };
}
