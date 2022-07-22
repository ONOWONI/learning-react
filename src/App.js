import './App.css';
import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <>
      <Header />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <UnorderedList />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <nav><p>img</p></nav>
    </header>
  )
}

function Footer() {
  return (<footer>2022 Badtnigga development. All rights reserved</footer>)
}

function UnorderedList() {
  return (
    <>
    <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originallly created by Jordan Walke</li>
        <li>Has well over 100k stars in Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including Mobile apps</li>
      </ul>
    </>
  )
}

console.log('red')

export default App;

