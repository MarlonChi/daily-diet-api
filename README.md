# Ignite Node 02 - Daily Diet API

Desafio 02 do Ignite Node da Rocketseat. Nele precisei desenvolver uma API com os conceitos do segundo módulo.
Algumas das libs utilizadas
<ul>
  <li>fastify</li>
  <li>typescript</li>
  <li>sqlite3</li>
  <li>knex</li>
  <li>supertest</li>
  <li>vitest</li>
  <li>zod</li>

</ul>

# Executando o projeto

Clonar o projeto, na pasta do projeto executar:

```
npm install

npm run dev

```

# Requisitos

[x] Deve ser possível criar um usuário
[x] Deve ser possível identificar o usuário entre as requisições
[x] Deve ser possível registrar uma refeição feita, com as seguintes informações:
    As refeições devem ser relacionadas a um usuário.
    - Nome
    - Descrição
    - Data e Hora
    - Está dentro ou não da dieta
[x] Deve ser possível editar uma refeição, podendo alterar todos os dados acima
[x] Deve ser possível apagar uma refeição
[x] Deve ser possível listar todas as refeições de um usuário
[x] Deve ser possível visualizar uma única refeição
[x] Deve ser possível recuperar as métricas de um usuário
    [x] Quantidade total de refeições registradas
    [x] Quantidade total de refeições dentro da dieta
    [x] Quantidade total de refeições fora da dieta
    [x] Melhor sequência de refeições dentro da dieta
[x] O usuário só pode visualizar, editar e apagar as refeições o qual ele criou


