import reducer from "../../store/reducer";
const { v4: uuid } = require("uuid");
import * as todoActions from "../../store/todos/actions";

const todoId1 = uuid();
const todoId2 = uuid();
const todoId3 = uuid();

const defaultState = {
    todos: [
        {
            id: todoId1,
            isComplete: false,
            description: "Do your homework",
        },
        {
            id: todoId2,
            isComplete: false,
            description: "Do the laundry",
        },
        {
            id: todoId3,
            isComplete: false,
            description: "Do the dishes",
        },
    ],
};

//Add todo
it("Should return the new state when an add todo action is fired", () => {
    const addTodoAction = todoActions.todoAdded("new todo added");

    expect(reducer(defaultState, addTodoAction)).toMatchObject({
        todos: [
            ...defaultState.todos,
            {
                id: expect.any(String),
                isComplete: false,
                description: "new todo added",
            },
        ],
    });
});

//Toggle todo
it("Should return the new state when a toggle todo action is fired", () => {
    const toggleTodoAction = todoActions.todoToggled(todoId2);
    expect(reducer(defaultState, toggleTodoAction)).toMatchObject({
        todos: [
            {
                id: todoId1,
                isComplete: false,
                description: "Do your homework",
            },
            {
                id: todoId2,
                isComplete: true,
                description: "Do the laundry",
            },
            {
                id: todoId3,
                isComplete: false,
                description: "Do the dishes",
            },
        ],
    });
});

//Remove todo
it("Should return the new state when a remove todo action is fired", () => {
    const removeTodoAction = todoActions.todoRemoved(todoId3);
    expect(reducer(defaultState, removeTodoAction)).toMatchObject({
        todos: [
            {
                id: todoId1,
                isComplete: false,
                description: "Do your homework",
            },
            {
                id: todoId2,
                isComplete: false,
                description: "Do the laundry",
            },
        ],
    });
});
