import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import SpecificNews from './components/pages/SpecificNews';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/news/:slug' element={<SpecificNews />}/>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
