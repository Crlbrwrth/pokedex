import React, { useState } from 'react'
import { TYPE_COLORS } from '../constants'
import './PokemonListView.css'

const PokemonListView = ({ pokemon }) => {
  const { name, types } = pokemon
  const [floating, setFloating] = useState(false)

  const handleClick = () => setFloating(!floating)

  return (
    <div className='pokemon-single-view'>
      <h4>{name}</h4>
      <img
        src={pokemon.sprites.front_default}
        alt={name}
        className={floating ? 'floating' : ''}
        onClick={handleClick}
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
