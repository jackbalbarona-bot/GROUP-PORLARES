import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';

const App = () => {
  
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const API_URL = "https://corsproxy.io/?https://pvz-2-api.vercel.app/api/plants";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error("Failed to connect to the Almanac.");
        }

        const data = await response.json();
        setPlants(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
      
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>PvZ Plant Almanac</h1>
      <hr />

      {}
      {loading && (
        <div style={statusStyles.loading}>
          <div className="spinner"></div>
          <p>The zombies are coming... fetching plants...</p>
        </div>
      )}

      {}
      {error && (
        <div style={statusStyles.error}>
          <h3>⚠️ Error</h3>
          <p>{error}. Please check your internet connection.</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}

      {/* Data Display: Reusable Components + Props */}
      {!loading && !error && (
        <div style={statusStyles.grid}>
          {plants.slice(0, 12).map((name, index) => (
            <PlantCard key={index} name={name} />
          ))}
        </div>
      )}
    </div>
  );
};

const statusStyles = {
  loading: { textAlign: 'center', padding: '50px', color: '#666' },
  error: { padding: '20px', backgroundColor: '#fee2e2', border: '1px solid #ef4444', color: '#b91c1c', borderRadius: '8px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px' }
};

export default App;