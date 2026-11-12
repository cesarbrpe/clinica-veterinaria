export abstract class Funcionario {
  private _salario: number;

  constructor(
    public readonly nome: string,
    public readonly matricula: string,
    salario: number
  ) {
    if (!nome.trim() || !matricula.trim()) {
      throw new Error("Nome e matrícula são obrigatórios.");
    }
    this._salario = 0;
    this.alterarSalario(salario);
  }

  get salario(): number {
    return this._salario;
  }

  // O salário só pode ser alterado por este método, que valida o valor.
  alterarSalario(novoSalario: number): void {
    if (!Number.isFinite(novoSalario) || novoSalario < 0) {
      throw new Error("O salário deve ser um número válido e não negativo.");
    }
    this._salario = novoSalario;
  }

  abstract calcularBonus(): number;

  calcularPagamento(): number {
    return this.salario + this.calcularBonus();
  }
}