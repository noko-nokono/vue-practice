import React, { useState, useEffect } from 'react';

interface PokeAPI {
  sprites: {
    front_default: string;
  };
  species: {
    name: string;
  };
}

const DataFetch: React.FC = () => {
  const [data, setData] = useState<PokeAPI | null>(null);
  const url = "https://pokeapi.co/api/v2/pokemon/ditto";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Fetch</h1>
      {data && (
        <div>
          <p>{data.species.name}</p>
          <img src={data.sprites.front_default} alt={data.species.name} />
        </div>
      )}
    </div>
  );
};

export default DataFetch;