import { Funcionario } from "./Funcionario";

export class Veterinario extends Funcionario {
  private consultasRealizadas = 0;
  private readonly bonusPorConsulta = 50;

  registrarConsulta(): void {
    this.consultasRealizadas++;
  }

  calcularBonus(): number {
    return this.consultasRealizadas * this.bonusPorConsulta;
  }

  get totalConsultas(): number {
    return this.consultasRealizadas;
  }
}