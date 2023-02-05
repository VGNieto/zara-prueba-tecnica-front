import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Episode from "./pages/Episode";
import Home from "./pages/Home";
import Podcast from "./pages/Podcast";

const App = () => {
  return (
    <Router>
      <div style={{ margin: "0px 20%" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 style={{ fontFamily: "Roboto, sans-serif", color: "#3377b3" }}>
            Podcaster
          </h1>
        </Link>
        <hr style={{ opacity: "30%" }} />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/podcast/:podcastId/" element={<Podcast />}>
            <Route path='episode/:episodeId' element={<Episode />} />  
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
