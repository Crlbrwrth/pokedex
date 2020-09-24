import { createSlice } from '@reduxjs/toolkit'

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: {
    docs: {},
    activePokemon: {}
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    updateDocs: (state, action) => {
      console.log('state', state)
      console.log('action', action)
      const update = action.payload
      state.docs = { ...state.docs, ...update }
    }
  }
})

export const {
  increment, decrement, incrementByAmount, setDocs, updateDocs
} = pokedexSlice.actions

export const fetchSinglePokemon = async pokemon => {
  const result = await window.fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
  const data = result.json()
  return data
}

export const fetchThemAll = (state) => async (dispatch, getState) => {
  const response = await window.fetch('https://pokeapi.co/api/v2/pokemon')
  const data = await response.json()
  const results = data.results
  const list = await Promise.all(results.map(fetchSinglePokemon))
  const updateObj = list.reduce((acc, ele) => {
    acc[ele.name] = ele
    return acc
  }, {})
  await dispatch(updateDocs(updateObj))
  // console.log('getState()', getState())
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
