# Resgate 2.0

**Problema:** Sistema de Adoção de Pets

**Contexto:** Um abrigo de animais deseja modernizar seu processo de adoção. Atualmente, todas as informações dos pets e adotantes são controladas manualmente, o que resulta em atrasos e desorganização. Com uma aplicação web, o abrigo pretende agilizar o cadastro de pets disponíveis para adoção e facilitar a conexão com possíveis adotantes, tornando o processo mais eficiente e acessível.

**Objetivo:** Desenvolver uma aplicação web funcional que permita ao abrigo gerenciar seus pets e acompanhar o processo de adoção. A aplicação deve possibilitar o cadastro e visualização de pets, o registro de adotantes e a realização de adoções.

## Instruções para colaboradores

**Documentação das tecnologias**

O projeto faz uso das seguintes ferrramentas, verifique as suas documentações:

- [Vite](https://vite.dev/guide/)
- [React](https://react.dev/learn)
- [Tailwind](https://tailwindcss.com/docs/installation)
- [Shadcnui](https://ui.shadcn.com/docs/components)

**Politica de branchs**

1. Antes de iniciar a codar, faça um pull na branch dev para garantir que você está na versão mais atual do codigo:
   ```bash
   git checkout dev
   git pull origin dev
   ```

2. Crie uma branch que descreva a funcionalidade que vai desenvolver, por exemplo, crud-pet:
   ```bash
   git checkout -b crud-pet
   ```

3. Faça o commit das suas alterações:
   ```bash
   git add .
   git commit -m "feat: Cadastro novo pet"
   ```

4. Faça um push das suas alterações para a branch que criou:
   ```bash
   git push origin crud-pet
   ```

5. Quando todas as alterações referentes a sua branch forem implementadas, vá ao GitHub e abra um pull request para a branch dev.


**Instalação e Execução do Projeto:**

1. Baixe e instale o [NodeJS](https://nodejs.org/).

2. Para instalar as dependências, execute o comando na pasta raiz do projeto:
   ```bash
   npm install
   ```

3. Para rodar o projeto localmente:
   ```bash
   npm run dev
   ```

4. O projeto ficará disponível no navegador pelo link http://localhost:5173

5. OBS: O projeto requer que o backend esteja disponível na url http://localhost:3001. Para isso veja o readme do backend em [ResgateAPI](https://github.com/AvantiPetLovers/ResgateAPI)
