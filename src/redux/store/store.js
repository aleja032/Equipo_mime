import { configureStore } from "@reduxjs/toolkit"; 
import commentSlice from "../../redux/slice/commentSlice";

export const store = configureStore({
    reducer: {
        comment: commentSlice,
    }
})
export default store;