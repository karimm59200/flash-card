import {createSlice} from "@reduxjs/toolkit";

const flashSlice = createSlice({
    name: "flash",
    initialState: {
        flashCards: [{
            id: 1,
            question: "What is the capital of France?",
            answer: "Paris",
        }, {
            id: 2,
            question: "What is the capital of Germany?",
            answer: "Berlin",
        }, {
            id: 3,
            question: "What is the capital of Italy?",
            answer: "Rome",

        }],

    },
    reducers: {

        addFlashCardAction(state, action) {
            const id = state.flashCards.length + 1;
            state.flashCards.push({id:id,...action.payload})

        },
        editFlashCardAction(state, action) {
            const flashCardToEdit = state.flashCards.find(flashCard => flashCard.id === action.payload.id)
            if (flashCardToEdit) {
                state.flashCards = [...state.flashCards.filter(flashCard => flashCard.id !== action.payload.id), action.payload]
            }
        }
    }
})

export const {addFlashCardAction, editFlashCardAction} = flashSlice.actions

export const selectFlashCards = (state) => state.flash.flashCards;
export default flashSlice.reducer

