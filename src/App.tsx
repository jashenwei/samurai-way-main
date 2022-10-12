import React from 'react';
import './App.css';
import Technologies from './Technologies';
import Header from './Header';
import Footer from "./Footer";

const App = () =>{
  return (
    <div className="App">
        <Header />
        <Footer />
        <Technologies />
    </div>
  );
}

export default App;