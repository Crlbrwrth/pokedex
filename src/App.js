import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonList } from './features/pokedexSlice'
import './App.css'
import PokemonListView from './components/PokemonListView'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemonList())
  }, [dispatch])

  const pokemonList = useSelector(state => state.pokedex.docs)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>POKEDEX</h1>
      </header>
      <div className='App-body'>
        {
          Object.keys(pokemonList).map((key, idx) => {
            const pokemon = pokemonList[key]
            return <PokemonListView key={pokemon.id} pokemon={pokemon} />
          })
        }
      </div>
    </div>
  )
}

export default App
