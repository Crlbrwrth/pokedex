import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from './logo.svg'
import { fetchThemAll } from './features/pokedexSlice'
import './App.css'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchThemAll())
  }, [])

  const pokemonList = useSelector(state => state.pokedex.docs)
  // const psyduckImgUrl = psyduck && psyduck.sprites.front_default

  const TYPE_COLORS = {
    fire: 'red',
    grass: 'green',
    water: 'blue'
  }

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={psyduckImgUrl || logo} className="App-logo" alt="logo" /> */}
        {
          pokemonList &&
            Object.keys(pokemonList).map((key, idx) => {
              const mon = pokemonList[key]
              const { name, types } = mon
              return (
                <div key={name}>
                  <h4>{name}</h4>
                  <div><small>{types.map((t, i) => <span key={i} style={{ color: TYPE_COLORS[t.type.name || 'orange'] }}>{t.type.name}</span>)}</small></div>
                  <img
                    src={mon.sprites.front_default}
                    alt={name}
                    className={idx % 2 ? 'App-logo' : 'App-logo2'}
                  />
                </div>
              )
            })
        }
      </header>
    </div>
  )
}

export default App
