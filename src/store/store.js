import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './languageSlice'
import languageSlice from './languageSlice'

export const store = configureStore({
    reducer: {
        language: languageSlice

    },
})