import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonList } from './features/pokedexSlice'
import './App.css'
import PokemonListView from './components/PokemonListView'
import PokemonDetailView from './components/PokemonDetailView'
import ReactPlayer from 'react-player'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemonList())
  }, [dispatch])

  const pokemonList = useSelector(state => state.pokedex.docs)

  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  return (
    <div className='App'>
      <div className='player-options'>
        <span onClick={() => setMuted(!muted)}>{muted ? '🔊' : '🔈'}</span>
        <span onClick={() => setPlaying(!playing)}>{playing ? '❌📺' : '📺'}</span>
      </div>
      {
        playing &&
          <ReactPlayer
            className='background-video'
            url='https://www.youtube.com/watch?v=rRgwVDIU41w'
            height='100%'
            width='100%'
            muted={muted}
            playing
            loop
          />
      }
      <header className='App-header'>
        <h1>POKEDEX</h1>
      </header>
      <PokemonDetailView />
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
