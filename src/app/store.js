import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import pokedexReducer from '../features/pokedexSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    pokedex: pokedexReducer
  }
})
