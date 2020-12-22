import * as actions from "../../store/todos/actions";
import * as actionTypes from "../../store/todos/actionTypes";
const { v4: uuid } = require("uuid");

//Create todo
it("Should match with a new todo action", () => {
    expect(actions.todoAdded("Do the dishes")).toMatchObject({
        type: actionTypes.TODO_ADDED,
        payload: {
            id: expect.any(String),
            description: "Do the dishes",
        },
    });
});

//Toggle todo
it("Should match with a toggle todo action", () => {
    const todoID = uuid();
    expect(actions.todoToggled(todoID)).toMatchObject({
        type: actionTypes.TODO_TOGGLED,
        payload: {
            id: todoID,
        },
    });
});

//Remove todo
it("Should match with a remove todo action", () => {
    const todoID = uuid();
    expect(actions.todoRemoved(todoID)).toMatchObject({
        type: actionTypes.TODO_REMOVED,
        payload: {
            id: todoID,
        },
    });
});
