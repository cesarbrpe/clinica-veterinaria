export abstract class Animal {
  constructor(
    public readonly nome: string,
    public readonly idade: number,
    public readonly tutor: string
  ) {
    if (!nome.trim() || !tutor.trim()) {
      throw new Error("O nome do animal e o tutor são obrigatórios.");
    }
    if (idade < 0) {
      throw new Error("A idade não pode ser negativa.");
    }
  }

  abstract emitirSom(): string;
  abstract descreverCuidadosDiarios(): string;

  apresentar(): string {
    return `${this.nome}, ${this.idade} ano(s), tutor: ${this.tutor}`;
  }
}