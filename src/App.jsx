import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=3&offset=3")
    .then( x => x , json()).then(x => setData(X))
  }, []);
  return <pre>{JSON.stringify(data,null,2)}
  </pre>;
};

export default App;
