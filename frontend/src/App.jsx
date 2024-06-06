import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path={'/'} />
    </Routes>
  )
}

export default App