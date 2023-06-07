import { Pokemon } from "../value-objects/pokemon.value-object";


export class PokemonList {
    private readonly results: Pokemon[];
    private readonly next: string | null;
    private readonly previous: string | null;
    private readonly count: number;
  
    constructor(results: Pokemon[], next: string | null, previous: string | null, count: number) {
      this.results = results;
      this.next = next;
      this.previous = previous;
      this.count = count;
    }
  
  }