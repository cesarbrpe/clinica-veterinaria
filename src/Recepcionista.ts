import { Funcionario } from "./Funcionario";

export class Recepcionista extends Funcionario {
  private agendamentosConfirmados = 0;
  private readonly bonusPorAgendamento = 10;

  confirmarAgendamento(): void {
    this.agendamentosConfirmados++;
  }

  calcularBonus(): number {
    return this.agendamentosConfirmados * this.bonusPorAgendamento;
  }

  get totalAgendamentos(): number {
    return this.agendamentosConfirmados;
  }
}