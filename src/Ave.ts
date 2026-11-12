import { Animal } from "./Animal";

export class Ave extends Animal {
  emitirSom(): string {
    return "Piu piu!";
  }

  descreverCuidadosDiarios(): string {
    return "Gaiola limpa e segura, água fresca, alimentação própria e espaço para se movimentar.";
  }
}