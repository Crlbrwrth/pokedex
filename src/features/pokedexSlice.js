import { createSlice } from '@reduxjs/toolkit'

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: {
    docs: [],
    activePokemon: {}
  },
  reducers: {
    setpsyduck: (state, action) => {
      state.psyduck = action.payload
    },
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount, setpsyduck } = pokedexSlice.actions

export const fetchpsyduck = () => async dispatch => {
  const response = await window.fetch('https://pokeapi.co/api/v2/pokemon/psyduck')
  const data = await response.json()
  dispatch(setpsyduck(data))
}
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value

export default pokedexSlice.reducer
