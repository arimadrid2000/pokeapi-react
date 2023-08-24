import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PokemonListView from './views/PokemonListView'
import PokemonDetailView from './views/PokemonDetailView'

function App() {
  return(
    <div className='container-fluid maxh bg-dark text-white overflow-x-hidden'>
      <Router>
        <Routes>
          <Route path="/" element={<PokemonListView />} />
          <Route path="/pokemon/:id" element={<PokemonDetailView />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App