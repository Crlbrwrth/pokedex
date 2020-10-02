import React from 'react'
import { useSelector } from 'react-redux'
import './PokemonDetailView.css'

const PokemonDetailView = () => {
  const pokemon = useSelector(state => state.pokedex.activePokemon)
  if (!Object.keys(pokemon).length) return <div />
  console.log('pokemon', pokemon)
  return (
    <div className='pokemon-detail-view'>
      <h2>{pokemon.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Pokedex No</th>
            <th>Base Experience</th>
            <th>Height</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pokemon.id}</td>
            <td>{pokemon.base_experience}</td>
            <td>{pokemon.height}</td>
            <td>{pokemon.weight}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <img src={pokemon.sprites.front_default} />
        <img src={pokemon.sprites.back_default} />
        <br />
        <img src={pokemon.sprites.front_shiny} />
        <img src={pokemon.sprites.back_shiny} />
      </div>
      {
        pokemon.stats.map(stat => (
          <div key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</div>
        ))
      }
    </div>
  )
}

export default PokemonDetailView
