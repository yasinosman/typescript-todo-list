import store from "../../store/store";
import { todoAdded } from "../../store/todos/actions";
import { createHtmlElement } from "../../utils";

export default class NewTodoForm {
    private form = createHtmlElement(
        "form",
        "<input class='form__input' name='newTodoInput' placeholder= 'Type a todo and hit enter'>",
        {
            class: "form",
        }
    ) as HTMLFormElement;

    constructor() {
        this.initTodoForm();
    }

    initTodoForm = () => {
        this.form.addEventListener("submit", this.handleFormSubmit);
    };

    handleFormSubmit = (e: Event) => {
        e.preventDefault();
        if (typeof this.form !== null) {
            const formData = new FormData(this.form);
            const value = formData.get("newTodoInput") as string;
            if (value !== "") {
                store.dispatch(todoAdded(value));
                this.form.reset();
            }
        }
    };

    render = (): HTMLElement => {
        return this.form;
    };
}
