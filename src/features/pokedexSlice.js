import { createSlice } from '@reduxjs/toolkit'
import { getFromLocalStorage, saveToLocalStorage } from '../tools/localStorage'

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: {
    docs: {},
    activePokemon: {}
  },
  reducers: {
    updateDocs: (state, action) => {
      const update = action.payload
      state.docs = { ...state.docs, ...update }
    },
    setActive: (state, action) => {
      const activePokemon = state.docs[action.payload] || {}
      state.activePokemon = activePokemon
    }
  }
})

export const {
  updateDocs, setActive
} = pokedexSlice.actions

export const setActivePokemon = (name) => async (dispatch, getState) => {
  dispatch(setActive(name))
}

const apiPath = 'https://pokeapi.co/api/v2/pokemon'

const fetchSinglePokemon = async pokemon => {
  const result = await window.fetch(`${apiPath}/${pokemon.name}`)
  const data = result.json()
  return data
}

const saveListToReduxState = async (list, dispatch) => {
  const updateObj = list.reduce((acc, ele) => {
    acc[ele.name] = ele
    return acc
  }, {})
  await dispatch(updateDocs(updateObj))
}

const fetchPokemonListFromApi = async () => {
  const response = await window.fetch(apiPath)
  const data = await response.json()
  return data.results
}

export const getPokemonList = (state) => async (dispatch, getState) => {
  const storedList = getFromLocalStorage('pokemonList')
  if (storedList) {
    saveListToReduxState(storedList, dispatch)
  } else {
    const list = await fetchPokemonListFromApi()
    const filledList = await Promise.all(list.map(fetchSinglePokemon))
    saveListToReduxState(filledList, dispatch)
    saveToLocalStorage('pokemonList', filledList)
  }
}

export default pokedexSlice.reducer
