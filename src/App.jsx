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
      Width: "800px",
      padding: "12px",
      margin: "12px",
      border: "4px solid pink",
     }}
  >
    <span>{e.name}</span>
    {data.sprites?.front_default && (
    <img src={data.sprites.front_default} />
    )}
    </div>
 );
};

 const PAGE_SIZE=3
const App = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(0)
  useEffect (() => {
    fetch(
      "https://pokeapi.co//api/v2/pokemon?limit=" + 
       PAGE_SIZE + 
       "&offset=" +
       PAGE_SIZE * page,
    )
     .then((x) => x.json())
     .then((x) => setData(x));
  }, [page]);

  return (
    <div style={{ display: "flex", flexDirection: "column", backgroundColor: "grey", minHeight: "100vh",}}>
      <h1 style={{ marginTop: "20px", color: "pink"}}>Pokemon Kataloğu</h1>
      {data.results?.map((e) => (
       <PokemonCard key={e.name} e={e} />
      ))}
     <div style={{ display: "flex", flexDirection: "row"}}>
       <button onClick={() => setPage((ps) => ps - 1)}>prev</button>
       <button onClick={() => setPage((ps) => ps + 1)}>next</button>
      </div>
    </div>
  );
};
     
export default App;
