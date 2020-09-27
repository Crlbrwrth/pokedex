import React from 'react'
import { useSelector } from 'react-redux'
import './PokemonDetailView.css'

const PokemonDetailView = () => {
  const pokemon = useSelector(state => state.pokedex.activePokemon)
  if (!Object.keys(pokemon).length) return <div />
  return (
    <div className='pokemon-detail-view'>
      <h1>{pokemon.name}</h1>
      <ul>
        {
          pokemon.moves.map(ele => {
            const move = ele.move
            console.log('move', move)
            return <div key={move.name}>{move.name}</div>
          })
        }
      </ul>
    </div>
  )
}

export default PokemonDetailView
