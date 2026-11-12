import { Animal } from "./Animal";
import { Veterinario } from "./Veterinario";

export class Consulta {
  constructor(
    public readonly animal: Animal,
    public readonly veterinario: Veterinario,
    public readonly data: Date
  ) {
    if (!(animal instanceof Animal)) {
      throw new Error("Uma consulta precisa de um animal cadastrado.");
    }
    if (!(veterinario instanceof Veterinario)) {
      throw new Error("Uma consulta precisa de um veterinário.");
    }
    if (Number.isNaN(data.getTime())) {
      throw new Error("A data da consulta é inválida.");
    }
  }

  detalhar(): string {
    return `Consulta de ${this.animal.nome} com Dr(a). ${this.veterinario.nome} em ${this.data.toLocaleDateString("pt-BR")}.`;
  }
}