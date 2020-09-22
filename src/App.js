import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import { fetchpsyduck } from './features/pokedexSlice'
import './App.css'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchpsyduck())
  }, [])

  const psyduck = useSelector(state => state.pokedex.psyduck)
  const psyduckImgUrl = psyduck && psyduck.sprites.front_default

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={psyduckImgUrl || logo} className="App-logo" alt="logo" />
        {/* <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className='App-link'
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux-toolkit.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className='App-link'
            href='https://react-redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React Redux
          </a>
        </span> */}
      </header>
    </div>
  )
}

export default App
