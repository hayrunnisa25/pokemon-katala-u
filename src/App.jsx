import { useEffect } from 'react';
import {  useState } from 'react';

const App = () => {
  const [data, setData] = useState({ results:[] });
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=3&offset=0")
      .then((x) => x.json())
      .then((x) => setData(x));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
      {data.results.map ((e) => (
        <div
         key={e.name}//
          style={{
           maxWidth: "min-content",
           padding: "4px",
           margin: "4px",
           border: "1px solid black",
          }}
        >
         <span>{e.name}</span>
        </div>
      )) }
    </div>  
  );
};

export default App;
