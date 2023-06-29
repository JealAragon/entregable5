/* en este archivo estamos configurando redux.js */
import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "./slices/nameTrainer.slice";



//* se configura el contexto o el provider como lo llama la libredia  */
export default configureStore({

    reducer: {
        //* aca es donde van todos nuestros estados globales (slices) */
        nameTrainer

    }


})