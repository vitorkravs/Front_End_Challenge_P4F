import React from 'react'

import Header from './componets/Header/Header'
import ListUsers from './componets/ListUsers/ListUsers'

import './App.css'

function App() {

  return (
    <div className="App">  
      <div id='container'>
        <Header />
        <ListUsers/>
      </div> 
    </div>
  )
}

export default App
