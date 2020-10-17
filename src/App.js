import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
