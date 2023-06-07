import { Injectable } from '@nestjs/common';
import { PokemonList } from '../domain/entities/pokemonList.entity';

@Injectable()
export class PokemonRepository {
  private readonly apiUrl =
    'https://pokeapi.co/api/v2/ability/?limit=6&offset=0';

  async getPokemonsList(): Promise<PokemonList> {
    const response = await fetch(this.apiUrl);
    const { 
      results: data,
      next,
      previous,
      count
    } = await response.json();

    return new PokemonList(
      data,
      next,
      previous,
      count
    );
  }
}
