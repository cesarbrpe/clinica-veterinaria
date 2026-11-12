import { Animal } from "./Animal";
import { Funcionario } from "./Funcionario";
import { Veterinario } from "./Veterinario";
import { Recepcionista } from "./Recepcionista";
import { Consulta } from "./Consulta";

export class Clinica {
  private animais: Animal[] = [];
  private funcionarios: Funcionario[] = [];
  private consultas: Consulta[] = [];

  constructor(public readonly nome: string) {
    if (!nome.trim()) throw new Error("A clínica precisa de um nome.");
  }

  cadastrarAnimal(animal: Animal): void {
    this.animais.push(animal);
  }

  contratarFuncionario(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario);
  }

  agendarConsulta(animal: Animal, veterinario: Veterinario, data: Date): Consulta {
    if (!this.animais.includes(animal)) {
      throw new Error("O animal precisa estar cadastrado na clínica.");
    }
    if (!this.funcionarios.includes(veterinario)) {
      throw new Error("O veterinário precisa estar cadastrado na clínica.");
    }

    const consulta = new Consulta(animal, veterinario, data);
    this.consultas.push(consulta);
    veterinario.registrarConsulta();
    return consulta;
  }

  confirmarAgendamento(recepcionista: Recepcionista): void {
    if (!this.funcionarios.includes(recepcionista)) {
      throw new Error("A recepcionista precisa estar cadastrada na clínica.");
    }
    recepcionista.confirmarAgendamento();
  }

  listarAnimais(): Animal[] {
    return [...this.animais];
  }

  listarFuncionarios(): Funcionario[] {
    return [...this.funcionarios];
  }

  listarConsultas(): Consulta[] {
    return [...this.consultas];
  }

  resumo(): string {
    return `${this.nome}: ${this.animais.length} animal(is), ${this.funcionarios.length} funcionário(s) e ${this.consultas.length} consulta(s).`;
  }
}