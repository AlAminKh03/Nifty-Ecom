import { legacy_createStore as createStore } from "redux";
import productReducer from "./products/reducer";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;
