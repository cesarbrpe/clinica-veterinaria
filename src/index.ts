import { Clinica } from "./Clinica";
import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";
import { Ave } from "./Ave";
import { Veterinario } from "./Veterinario";
import { Recepcionista } from "./Recepcionista";

const clinica = new Clinica("Clínica Veterinária Dona Marta");

// Cadastro de animais de espécies diferentes.
const cachorro = new Cachorro("Rex", 4, "Mariana");
const gato = new Gato("Mimi", 2, "João");
const ave = new Ave("Loro", 1, "Ana");

clinica.cadastrarAnimal(cachorro);
clinica.cadastrarAnimal(gato);
clinica.cadastrarAnimal(ave);

// Cadastro de funcionários.
const veterinario = new Veterinario("Dr. Paulo", "VET001", 3500);
const recepcionista = new Recepcionista("Carla", "REC001", 2200);

clinica.contratarFuncionario(veterinario);
clinica.contratarFuncionario(recepcionista);

// Agendamento de consulta e confirmação pela recepção.
const consulta = clinica.agendarConsulta(cachorro, veterinario, new Date("2026-11-20"));
clinica.confirmarAgendamento(recepcionista);

console.log("=== SISTEMA DA CLÍNICA ===");
console.log(clinica.resumo());

console.log("\\n=== ANIMAIS ===");
// Polimorfismo: cada espécie responde de maneira diferente aos mesmos métodos.
for (const animal of clinica.listarAnimais()) {
  console.log(animal.apresentar());
  console.log(`Som: ${animal.emitirSom()}`);
  console.log(`Cuidados: ${animal.descreverCuidadosDiarios()}\\n`);
}

console.log("=== CONSULTAS ===");
console.log(consulta.detalhar());

console.log("\\n=== PAGAMENTO DOS FUNCIONÁRIOS ===");
for (const funcionario of clinica.listarFuncionarios()) {
  console.log(
    `${funcionario.nome} | Salário: R$ ${funcionario.salario.toFixed(2)} | Bônus: R$ ${funcionario.calcularBonus().toFixed(2)} | Total: R$ ${funcionario.calcularPagamento().toFixed(2)}`
  );
}