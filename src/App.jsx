import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  ContactProvider  from './context/ContactContext';
import Home from './pages/Home';
import AddEditContact from './pages/AddEditContact';


const App = () => {

  return (

    <ContactProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEditContact />} />
        <Route path="/edit/:id" element={<AddEditContact />} />
      </Routes>
    </Router>
  </ContactProvider>
   
   
  );
};

export default App;