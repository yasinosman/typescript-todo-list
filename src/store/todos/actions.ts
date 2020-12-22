import * as actions from "./actionTypes";
const { v4: uuid } = require("uuid");

export const todoAdded = (description: string) => ({
    type: actions.TODO_ADDED,
    payload: {
        id: uuid(),
        description,
    },
});

export const todoToggled = (id: string) => ({
    type: actions.TODO_TOGGLED,
    payload: {
        id,
        description: undefined,
    },
});

export const todoRemoved = (id: string) => ({
    type: actions.TODO_REMOVED,
    payload: {
        id,
        description: undefined,
    },
});
