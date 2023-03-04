import {configureStore} from '@reduxjs/toolkit'
import flashSlice from "./components/flashCard/flashSlice";


const store = configureStore({
    reducer: {
        flash: flashSlice,
    },
})

export default store