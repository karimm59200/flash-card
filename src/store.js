import {configureStore} from '@reduxjs/toolkit'
import flashCardSlice from './components/flashCard/flashCardSlice'


const store = configureStore({
    reducer: {
        // auth: authSlice,
        flashCards: flashCardSlice
    }
})

export default store