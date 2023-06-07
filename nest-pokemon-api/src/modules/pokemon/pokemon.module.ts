import { Module } from '@nestjs/common';
import { PokemonController } from './interface/controllers/pokemon.controller';
import { PokemonRepository } from './infrastructure/pokemon.repositoryImpl';

@Module({
  controllers: [PokemonController],
  providers: [PokemonRepository],
})
export class PokemonModule {}