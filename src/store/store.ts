const { createStore } = require("redux");
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
