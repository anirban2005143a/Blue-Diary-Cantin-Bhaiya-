import React from 'react'
import { HashRouter as Router , Routes, Route } from "react-router-dom"
import Home from "./conmopents/home"

const App = () => {
  return (
    // <RouterProvider router={router} />
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  )
}

export default App