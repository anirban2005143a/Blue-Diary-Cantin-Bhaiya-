import React from 'react'
import { HashRouter as Router , Routes, Route } from "react-router-dom"
import Home from "./conmopents/home"
import Billionaires from './sectors/Billionaires'
import Institutes from './sectors/Institutes'
import Technology from './sectors/Technology'
import Celebrity from './sectors/Celebrity'
import Lists from './sectors/Lists'
import StartUp from './sectors/StartUp'
import Top10 from './sectors/Top10'
import RealEstate from './sectors/RealEstate'
import Sports from './sectors/Sports'
import BlogWritting from './sectors/BlogWritting'
import Contact from './Contact'

const App = () => {
  return (
    // <RouterProvider router={router} />
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/billionaires" element={<Billionaires />} />
      <Route path="/institutions" element={<Institutes />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/celebrity" element={<Celebrity />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/startups" element={<StartUp />} />
      <Route path="/top10" element={<Top10 />} />
      <Route path="/realestate" element={<RealEstate />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/blogwritting" element={<BlogWritting />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  )
}

export default App