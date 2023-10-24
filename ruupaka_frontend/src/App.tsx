import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {

  const [results, setResults] = useState([]);

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} index />
        </Routes>
      </BrowserRouter>
    </div>
  );

  /*
  return(
    <div className='App'>
      <div className='search-bar-container'>
        <SearchBar 
        setResults = {setResults}
        />
        <SearchResultsList
        results = {results}
        />
      </div>
    </div>
  );
  */
}

export default App
