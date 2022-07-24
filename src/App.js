import './App.css';
import React from 'react';
import Header from './components/header.js';
import UnorderedList from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <UnorderedList />
      <Footer />
    </div>
  );
}



export default App;