import './App.css';
import Main from './components/MainLogin';
import React from 'react';
import Contact from './components/Contact';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (  
    <CookiesProvider>
    <Contact/>
    </CookiesProvider>
  );
}
export default App;
