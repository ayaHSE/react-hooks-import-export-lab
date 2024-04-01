import React from "react";
import { render } from "react-dom";
import "../components/NavBar";
import "../components/About"; 
import "./Home";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
