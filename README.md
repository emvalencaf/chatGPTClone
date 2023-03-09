# Projeto consumindo a API do ChatGPT

## Sobre

Nesse projeto foi desenvolvido backend e frontend para consumir a API da openai.

### Desenvolvimento

#### Backend

O backend foi desenvolvido em JavaScript usando o NodeJS.

A lógica aplicada foi desenvolver o projeto em layers.

#### Frontend

O frontend foi desenvolvido em TypeScript usando o ReactJS para componetizar os elementos e o NextJS para tentar ganhar performance com as páginas estáticas.

### Como usar
1. Baixe o repositório;
2. Vá ao site da OpenAi e cadastre-se lá;
3. Crie uma API_KEY;
3. Crie um arquivo ``.env`` e coloque a seguinte:
````
PORT=Porta em que o servidor ficará ouvindo
OPENAI_API_KEY=a API KEY
```` 
4. Use o comando ``npm run dev`` ou ``npm start``;
