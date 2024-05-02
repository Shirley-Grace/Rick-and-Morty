import React, { useState, useEffect } from 'react'
// import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./Components/Cards";
import { Search } from './Components/Search';
import { Nav } from './Components/Nav';
import Page from "./Components/Page";
// import Humans from "./Components/Humans";
// import Aliens from "./Components/Aliens";
// import Page from './Components/Page';

function App() {
  let [pageNum, setPageNum] = useState(1);
  let [search, setSearch] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character?page=${pageNum}&name=${search}`;
  useEffect(() => {

    (async function () {
      let data = await fetch(api).then(Response => Response.json())
      updateFetchedData(data)
    })()
  }, [api])

  return (
    <div className="App">
        <div className='App'>
        <Nav />
      </div>
      <div className='mb-4'>
        <Search setPageNum={setPageNum} setSearch={setSearch} />
      </div>

      <div className="container">
        <div className="row">
          <Cards results={results} />
        </div>
      </div>
      <Page info={info} pageNum={pageNum} setPageNum={setPageNum}/>
    </div>
  );
}

export default App;
