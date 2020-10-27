import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './PokemonDetailView.css'
import { pokedexSlice } from '../features/pokedexSlice'
import { TypeLabels } from './PokemonListView'

const PokemonDetailView = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokedex.activePokemon)
  const handleKeyDown = (event) => {
    event.keyCode === 27 && handleCloseView()
  }

  const handleCloseView = () => dispatch(pokedexSlice.actions.setActive())

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className='pokemon-detail-view'>
      <div className='close-btn' onClick={handleCloseView}>X</div>
      <img src={pokemon.sprites.front_default} alt='front_default' className='top left' />
      <img src={pokemon.sprites.back_default} alt='back_default' className='bottom right' />
      <img src={pokemon.sprites.front_shiny} alt='front_shiny' className='top right' />
      <img src={pokemon.sprites.back_shiny} alt='back_shiny' className='bottom left' />
      <div className='controls'>
        <span>&lt;</span><span>&nbsp;#{pokemon.id}&nbsp;</span><span>&gt;</span>
      </div>
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
        <div className='stats-container'>
          {
            pokemon.stats.map(stat => (
              <div key={stat.stat.name} className='stat-item'>
                <div>{stat.stat.name}</div>
                <div>{stat.base_stat}</div>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default PokemonDetailView
