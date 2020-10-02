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
    <div
      className='pokemon-list-view'
      onClick={() => dispatch(pokedexSlice.actions.setActive(name))}
    >
      <div className='list-view-background' />
      <h4 onClick={handleClick}>{name}</h4>
      <img
        src={pokemon.sprites.front_default}
        alt={name}
        className={floating ? 'floating' : ''}
      />
      <div className='type-labels-container'>
        {types.map((ele, i) => <TypeLabel key={i} type={ele.type} />)}
      </div>
    </div>
  )
}

const TypeLabel = ({ type }) => {
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
