import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { times } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes, faBars, faCoffee);

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
