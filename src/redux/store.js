import { combineReducers } from "redux";
import contactsReducer from "./contactsSlice"
import filterReducer from "./filterSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});


const store = configureStore({
    reducer: rootReducer,
});


export default store;
