import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import SpecificNews from './components/pages/SpecificNews';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/govone' element={<Home />}/>
            <Route path='/news/:slug' element={<SpecificNews />}/>
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
