import React from 'react'

import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'
import { Layout } from './Layout'


function App() {
  return (
    
    
    <Router> 
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/Page4" element={<Page4 />} />


        </Route>
        
      </Routes>

    </Router>
  )
}

export default App


