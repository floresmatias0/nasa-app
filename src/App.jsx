import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Navbar from './components/navbar/Navbar';
import "animate.css"

const App = () => {
  return (
    <>
      <Navbar/>
      <Route exact path="/" component={Home} />
    </>
  );
}

export default App;
