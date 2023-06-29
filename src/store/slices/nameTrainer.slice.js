import { createSlice } from "@reduxjs/toolkit";

const nameTrainerSlice = createSlice({
    initialState: localStorage.getItem("nameTrainer" ?? ""),
    name: "nameTrainer",
    reducers: {
        setNameTrainer : (state, action) => {
            localStorage.setItem("nameTrainer", action.payload)
            return action.payload
        }

    }

})

export default nameTrainerSlice.reducer

export const { setNameTrainer } = nameTrainerSlice.actions