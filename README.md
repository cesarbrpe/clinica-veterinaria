# Clínica Veterinária Dona Marta

Projeto em TypeScript para representar o sistema de gerenciamento de uma clínica veterinária, aplicando Programação Orientada a Objetos (POO).

## Funcionalidades demonstradas

- Cadastro de animais (cachorros, gatos e aves).
- Cada espécie emite um som e descreve seus próprios cuidados diários.
- Cadastro de funcionários (veterinários e recepcionistas).
- Cálculo de bônus diferente para cada tipo de funcionário.
- Salário encapsulado e alterado somente pelo método `alterarSalario`, que valida o novo valor.
- Agendamento de consultas com animal, veterinário e data obrigatórios.
- A clínica mantém seus animais, funcionários e consultas cadastrados.

## Conceitos de POO

- **Abstração:** `Animal` e `Funcionario` são classes abstratas.
- **Herança:** `Cachorro`, `Gato` e `Ave` herdam de `Animal`; `Veterinario` e `Recepcionista` herdam de `Funcionario`.
- **Polimorfismo:** cada espécie implementa `emitirSom()` e `descreverCuidadosDiarios()` de forma própria; cada funcionário calcula seu bônus.
- **Encapsulamento:** salário e listas internas ficam privados, com métodos controlados para acessar ou alterar os dados.

## Requisitos

- Node.js instalado.

## Como executar

1. Abra a pasta do projeto no VS Code.
2. Abra o terminal dentro da pasta.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o exemplo:

   ```bash
   npm run dev
   ```

5. Para verificar a compilação TypeScript:

   ```bash
   npm run build
   ```

## Estrutura

```text
clinica-veterinaria/
├── src/
│   ├── Animal.ts
│   ├── Cachorro.ts
│   ├── Gato.ts
│   ├── Ave.ts
│   ├── Funcionario.ts
│   ├── Veterinario.ts
│   ├── Recepcionista.ts
│   ├── Consulta.ts
│   ├── Clinica.ts
│   └── index.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Observação

Este projeto é uma demonstração acadêmica em memória: os cadastros existem enquanto o programa está em execução. O enunciado não exige banco de dados nem interface gráfica.
