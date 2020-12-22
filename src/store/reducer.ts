import * as actions from "./todos/actionTypes";
import Todo from "../types/Todo";
import TodoAction from "../types/TodoAction";

const defaultTodosState: Todo[] = [];

export default function reducer(state = { todos: defaultTodosState }, action: TodoAction) {
    switch (action.type) {
        case actions.TODO_ADDED: {
            return {
                todos: [
                    ...state.todos,
                    {
                        id: action.payload.id,
                        isComplete: false,
                        description: action.payload.description,
                    },
                ],
            };
        }

        case actions.TODO_REMOVED: {
            return {
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
            };
        }

        case actions.TODO_TOGGLED: {
            return {
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, isComplete: !todo.isComplete } : todo
                ),
            };
        }
        default:
            return state;
    }
}
