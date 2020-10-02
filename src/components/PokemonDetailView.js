import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './PokemonDetailView.css'
import { pokedexSlice } from '../features/pokedexSlice'
import { TypeLabels } from './PokemonListView'

const PokemonDetailView = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokedex.activePokemon)
  const handleKeyDown = (event) => {
    event.keyCode === 27 &&
      dispatch(pokedexSlice.actions.setActive())
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className='pokemon-detail-view'>
      <img src={pokemon.sprites.front_default} alt='front_default' className='top left' />
      <img src={pokemon.sprites.back_default} alt='back_default' className='bottom left' />
      <img src={pokemon.sprites.front_shiny} alt='front_shiny' className='top right' />
      <img src={pokemon.sprites.back_shiny} alt='back_shiny' className='bottom right' />
      <h2>{pokemon.name}</h2>
      <TypeLabels types={pokemon.types} />
      <div className='overview'>
        <div>
          <div><b>Pokedex No</b></div>
          <div>{pokemon.id}</div>
        </div>
        <div>
          <div><b>Height</b></div>
          <div>{pokemon.height}</div>
        </div>
        <div>
          <div><b>Weight</b></div>
          <div>{pokemon.weight}</div>
        </div>
      </div>
      {/* Bild mit mehreren Quellen externe funktion fallback bild */}
      {
        pokemon.stats.map(stat => (
          <div key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</div>
        ))
      }
    </div>
  )
}

export default PokemonDetailView
