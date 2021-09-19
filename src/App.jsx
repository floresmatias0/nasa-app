import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Navbar from './components/navbar/Navbar';
import Favorites from './pages/Favorites/Favorites';
import About from './pages/About/About';

import "animate.css"

const App = () => {
  return (
    <>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/about" component={About} />
    </>
  );
}

export default App;
