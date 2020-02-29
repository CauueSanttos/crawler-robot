<h1 align="center">
<br>
  <img src="https://media.glassdoor.com/sqll/2806339/asksuite-brazil-squarelogo-1563777768189.png" alt="Robô Crawler" width="120">
<br>
<br>
Robô Crawler
</h1>

<p align="center">Robô Crawler que extrai informações de um motor de reservas.</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## Tecnologias
[//]: # (Add the features of your project here:)
Este aplicativo apresenta todas as mais recentes ferramentas e práticas em desenvolvimento web!

- 💹 **Node.js** — Ambiente de execução Javascript server-side.
- 📉 **Express** — É um framework para criação de API's REST utilizando Node.js
- 📶 **Puppeteer** — API de alto nível para controlar o Chrome ou o Chromium sobre o DevTools.
- ⭕ **Yup** — Biblioteca para validar schemas.
- 🌐 **Sucrase** — Uma alternativa ao Babel que permite um desenvolvimento muito rápido.
- ✔ **Prettier** — Utilizado para manter um código fonte mais bonito.
- 🧲 **Nodemon** — Reinicia o servidor quando detecta alterações em ambiente de desenvolvimento.
- 🔷 **Eslint** — Ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código.

## Iniciando o projeto

1 - Entre no caminho do projeto via powershell ou cmd utilizando **cd crawler-robot** <br />
2 - Execute o comando **yarn** após entrar no diretório para instalar as dependências. <br />
3 - Após instalar as dependências, execute o comando **yarn dev** para iniciar o servidor. <br />
4 - É necessário uma ferramenta para fazer requisições à API REST como **Insomnia** ou **Postman** <br />
5 - Url base para execução da api é: ```http://localhost:3333```

### Executando o Robô

**Descrição:** Ao informar a data de **checkin** e a data de **checkout** o robô irá extrair os dados do motor de reservas e retornar uma resposta com as opções encontradas. <br />
**Rota POST:** ```http://localhost:3333/buscar``` <br />
**Body:**
<pre>
  {
    "checkin": "15/03/2020",
    "checkout": "18/03/2020"
  }
</pre>

**Resposta:** <br/>
<pre>
  [
    {
      "price": "Preço do apartamento",
      "name": "Nome da hospedagem",
      "description": "Descrição do quarto",
      "images": [
        "Imagens do quarto",
      ]
    },
    {
      "price": "Preço do apartamento",
      "name": "Nome da hospedagem",
      "description": "Descrição do quarto",
      "images": [
        "Imagens do quarto",
      ]
    },
  ]
</pre>

Caso não encontrado nenhuma hospedagem relacionada as datas passadas no corpo da requisição, essa é a resposta:

<pre>
  {
    "error": "Desculpe-nos. Não existem apartamentos disponíveis para a pesquisa realizada."
  }
</pre>

Os campos **checkin** e **checkout** são obrigatórios na requisição, o **Yup** é responsável por validar o SCHEMA.
Suponhamos que não foi passado o campo **checkout**, a resposta será essa:

<pre>
  {
    "error": "Validation fails",
    "messages": [
      {
        "name": "ValidationError",
        "path": "checkout",
        "type": "required",
        "errors": [
          "checkout is a required field"
        ],
        "inner": [],
        "message": "checkout is a required field",
        "params": {
          "path": "checkout"
        }
      }
    ]
  }
</pre>

## Licença

Licença MIT - consulte a página [LICENÇA](https://opensource.org/licenses/MIT) para obter detalhes.
