import { createStore } from "redux";

// Containers
import reducers from "../reducers";

const store = createStore(reducers);

export default store;