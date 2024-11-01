import { configureStore } from "@reduxjs/toolkit";


import contactsReducer from "./contactsSlice/contactsSlice.js"
import filtersReducer from "./filtersSlice/filtersSlice.js"


const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
    }
})

export default store;