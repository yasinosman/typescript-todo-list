import store from "./store/store";
import TodoList from "./ui/components/TodoList";

document.addEventListener("DOMContentLoaded", () => {
    const todoList = new TodoList();
    document.querySelector("#app")?.appendChild(todoList.render());

    const unsubscribe = store.subscribe(() => {
        console.log(store.getState());
        (document.querySelector("#app") as HTMLElement).innerHTML = "";
        document.querySelector("#app")?.appendChild(todoList.render());
    });
});
