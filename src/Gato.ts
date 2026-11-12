import { Animal } from "./Animal";

export class Gato extends Animal {
  emitirSom(): string {
    return "Miau!";
  }

  descreverCuidadosDiarios(): string {
    return "Caixa de areia limpa, água fresca, alimentação e enriquecimento ambiental.";
  }
}