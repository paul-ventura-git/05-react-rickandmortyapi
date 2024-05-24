import './App.css';
import MyCard from './components/MyCard';
import { useState, useEffect } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1,183')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCharacters(data);
      });
  }, []);
  return (
    <div className="App">
      <h1>The rick and Morty api</h1>      
      <div>      
        {characters.map((character) => (
          <>
            <MyCard characterName={character.name} characterImage={character.image}></MyCard>
          </>
        ))}
      </div>
      
    </div>
  );
}

export default App;
