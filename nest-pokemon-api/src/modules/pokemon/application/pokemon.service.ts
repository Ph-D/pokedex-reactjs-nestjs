import { Injectable } from '@nestjs/common';

import { PokemonRepository } from '../domain/pokemon.repository';
import { PokemonList } from '../domain/entities/pokemonList.entity';

@Injectable()
export class PokemonService {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  async getPokemonsList(): Promise<PokemonList[]> {
    return this.pokemonRepository.getPokemonsList();
  }
}