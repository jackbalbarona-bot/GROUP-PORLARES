import React, { useState, useEffect } from 'react';
import './act4.css'; // Import your separate CSS
import PokemonCard from './PokemonCard.jsx';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=15";

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
       
        await new Promise(resolve => setTimeout(resolve, 2000));

        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to connect to the server.");

        const data = await response.json();
        
        const formattedData = data.results.map((p, index) => ({
          name: p.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
        }));

        setPokemonList(formattedData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Activity 4: Poké-Directory</h1>

      {/* 1. Loader Online - Shows when loading is true */}
      {loading && (
        <div className="loading-screen">
          <div className="spinner"></div>
          <h2>Catching Pokémon... Please wait.</h2>
        </div>
      )}

      {/* 2. Error Message - Shows if fetch fails */}
      {error && !loading && (
        <div className="error-msg">
          <h2>⚠️ Connection Error</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}

      {/* 3. Skeleton / Data Display */}
      {!loading && !error && (
        <div className="pokemon-grid">
          {pokemonList.map((poke, index) => (
  // The browser sees this and says: "What is a PokemonCard? I don't know that name."
  <PokemonCard key={index} name={poke.name} image={poke.image} /> 
))}
        </div>
      )}
    </div>
  );
};

export default App;