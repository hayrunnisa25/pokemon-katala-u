import {useEffect, useState } from 'react';
import'./App.css';

function App() {
    const[pokemonList,setPokemonList] = useState([]);
    const[loading,setLoading] =useState(true);

    useEffect(() =>{
    const fetchPokemons =async () =>{
        try {
            const res =await
    fetch('htps://pokeapi.co/api/v2/pokwmon?limit=20');
    const data = await res.json();
    
        }
    }
    }
)
}
