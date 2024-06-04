import { useContext, useState } from 'react'
import './App.css'
import Login from './component/LogIn'
import Register from './component/Register'
import { GlobalContext } from './component/GlobalContext'

function App() {

  const {theme,setTheme} = useContext(GlobalContext);

  return (
    <>
      <div className="card">
        <Login/>
        <Register/>
        <p>Selected theme is {theme}</p>
        <button onClick={() => theme === 'light'?setTheme('dark'):setTheme('light') }>
          Change Theme
        </button>
        </div>

    </>
  )
}

export default App
