import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/navbar/nav'
import Main from './components/mainsection/main'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  )
}

export default App
