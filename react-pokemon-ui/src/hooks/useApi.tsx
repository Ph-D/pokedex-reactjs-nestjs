import { useState } from 'react';
import { useQuery } from 'react-query';

export interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListResponse {
  results: Pokemon[];
  next: string | null;
  previous: string | null;
  count: number;
}

async function fetchPokemonList(url: string): Promise<PokemonListResponse> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon list');
  }
  const data = await response.json();
  return data;
}

export function useAPI() {
  const [url, setUrl] = useState('http://localhost:3000/pokemon/list');
  const { data, isLoading, error } = useQuery<PokemonListResponse>(
    ['pokemonList', url],
    () => fetchPokemonList(url),
    { keepPreviousData: true, staleTime: 300000 }
  );

  const handleNext = () => {
    if (data?.next) {
      setUrl(data.next);
    }
  };

  const handlePrevious = () => {
    if (data?.previous) {
      setUrl(data.previous);
    }
  };

  return {
    pokemonList: data?.results || [],
    isLoading,
    error,
    handleNext,
    handlePrevious,
  };
}