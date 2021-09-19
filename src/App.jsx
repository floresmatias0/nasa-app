import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Navbar from './components/navbar/Navbar';
import Favorites from './pages/Favorites/Favorites';
import "animate.css"

const App = () => {
  return (
    <>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites" component={Favorites} />
    </>
  );
}

export default App;
