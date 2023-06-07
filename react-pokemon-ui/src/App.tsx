import { Pokemon, useAPI } from "./hooks/useApi";
import "./index.css";
function App() {
  const { pokemonList, isLoading, error, handleNext, handlePrevious } =
    useAPI();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  return (
    <div className="m-4">
      <div className="space-x-4 mb-4">
        <button
          onClick={handlePrevious}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pokemonList.map((pokemon: Pokemon) => (
          <div
            key={pokemon.name}
            className="flex items-center justify-around p-4 border rounded-md bg-slate-500"
          >
            <div>{pokemon.name}</div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.url.split("/")[6]
              }.png`}
              alt={pokemon.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
