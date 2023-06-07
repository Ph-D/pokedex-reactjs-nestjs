import { PokemonList } from "./entities/pokemonList.entity";

export interface PokemonRepository {
  getPokemonsList(): Promise<PokemonList[]>;
}