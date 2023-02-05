import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Episode from "./pages/Episode"
import Home from "./pages/Home"
import Podcast from "./pages/Podcast"

const App =() => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path ="/podcast/:podcastId*" element={<Podcast  />} />
        <Route path ="/podcast/:podcastId/episode/:episodeId*"  element={<Episode/>} />
      </Routes>
    </Router>
  )
}
 
export default App

 
