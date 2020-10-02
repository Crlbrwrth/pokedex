import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TYPE_COLORS } from '../constants'
import './PokemonListView.css'
import { setActivePokemon, pokedexSlice } from '../features/pokedexSlice'

const PokemonListView = ({ pokemon }) => {
  const dispatch = useDispatch()
  const { name, types } = pokemon
  const [floating, setFloating] = useState(false)

  const handleClick = () => setFloating(!floating)

  return (
    <div className='pokemon-list-view'>
      <div
        className='list-view-background'
        onClick={() => dispatch(pokedexSlice.actions.setActive(name))}
      />
      <h4 onClick={handleClick}>{name}</h4>
      <img
        src={pokemon.sprites.front_default}
        alt={name}
        className={floating ? 'floating' : ''}
      />
      <TypeLabels types={types} />
    </div>
  )
}

export const TypeLabels = ({ types }) => {
  return (
    <div className='type-labels-container'>
      {types.map((ele, i) => <TypeLabel key={i} type={ele.type} />)}
    </div>
  )
}

export const TypeLabel = ({ type }) => {
  return (
    <div
      className='type-label'
      style={{ backgroundColor: TYPE_COLORS[type.name || 'black'] }}
    >
      {type.name}
    </div>
  )
}

export default PokemonListView
