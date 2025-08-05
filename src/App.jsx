import { useEffect } from 'react';
import {  useState } from 'react';

const PokemonCard = ({ e }) => { 
  const [data, setData] = useState({});
  useEffect(() => {
    if(!e.name) return;
   fetch("https://pokeapi.co/api/v2/pokemon/" + e.name )
     .then((x) => x.json())
     .then((x) => setData(x));
  }, [e.name]);

 return ( 
  <div
    style={{
      maxWidth: "min-content",
      padding: "4px",
      margin: "4px",
      border: "1px solid black",
     }}
  >
    <span>{e.name}</span>
    {data.sprites?.front_default && (
    <img src={data.sprites.front_default} />
    )}
    </div>
 );
};
 
const App = () => {
  const [data, setData] = useState({});
  useEffect (() => {
    fetch("https://pokeapi.co//api/v2/pokemon?limit=3&offset=0")
     .then((x) => x.json())
     .then((x) => setData(x));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
      {data.results?.map((e) => (
      <PokemonCard key={e.name} e={e} />
      ))}
    </div>
  );
};
     
export default App;
