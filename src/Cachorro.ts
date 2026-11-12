import { Animal } from "./Animal";

export class Cachorro extends Animal {
  emitirSom(): string {
    return "Au au!";
  }

  descreverCuidadosDiarios(): string {
    return "Passeios diários, água fresca, alimentação adequada e higiene.";
  }
}