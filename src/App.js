import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Art from "./components/Art";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Art />
    </div>
  );
}

export default App;
