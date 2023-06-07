import { Controller, Get, Query } from '@nestjs/common';
import { PokemonRepository } from '../../infrastructure/pokemon.repositoryImpl';
import { PokemonList } from '../../domain/entities/pokemonList.entity';


@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  @Get('list')
  async getPokemonsList(): Promise<PokemonList> {
    return this.pokemonRepository.getPokemonsList();
  }
}