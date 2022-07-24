import './App.css';
import React, {useEffect, useState} from 'react';
import NavBar from './components/NavBar';
import Characters from './components/Characters';
import Button from "./components/button";



function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  }

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }

  const onHome = () => {
    fetchCharacters(initialUrl)
  }

  useEffect(() => {
    fetchCharacters(initialUrl)
  }, [])

  return (
    <React.Fragment>
      <NavBar onHome={onHome}/>
      <div>
        <Button prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters= {characters}/>
        <Button prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </React.Fragment>
  );
}

export default App;
