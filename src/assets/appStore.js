import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./MovieSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({

    reducer: {
        // Add your reducers here
        user : userReducer,
        movies : movieReducer,
        gpt : gptReducer,
    },
});
export default appStore;