# Documentando o aprendizado: GraphQL + Apollo Server

Este documento está em fase inicial.

[X] Criar a estrutura do projeto
```
npm init -y
```
[X] Instalar o Apollo Server e o Graphql

```
npm install apollo-server graphql
```

[X] Configurar o Eslint e o Prettier
O Eslint e o Prettier são plugins que ajudam durante o desenvolvimento de código. Fiz um fork de outro projeto onde tem um script que faz a configuração do ESLint e do Prettier automaticamente.

```
npx https://github.com/umExDev/eslint-prettier
```

[X] Instalando o Sucrase como dependência para poder usar o import no node sem passar trabalho e sem precisar configurar o Babel ou outra forma para eu poder importar módulos no Node. Instale como dependência de desenvolvimento.
-- Depois de ler a documentação do Sucrase e entender os recursos e as limitações, eu estou questionando se uso o Babel ou ES-Build para transpilar meu código. Ainda vou aguardar a evolução do treinamento para ver se faz sentido usar o Sucrase.
```
npm install sucrase -D
```
Para testar o Sucrase você pode testar no terminal rodando o seguinte comando:
```
node -r sucrase/register src/index.js
```
Você pode adicionar este comando no seu package.json para executar com npm run porém faz sentido deixar o nodemon ficar escutando essas modificações. Veja o próximo passo

[X] Instalar o Nodemon
Para instalar o nodemon e deixar ele assistindo as modificações no nosso código e reiniciando o servidor automaticamente, digite o seguinte código:

```
npm i nodemon
```
Após a instalação do nodemon você editar o seu ```package.json``` e adicionar a seguinte linha em scripts:
```
 "dev": "nodemon -r sucrase/register src/index.js"
```
[X] Criando o primeiro modelo de Schema para query no GraphQL
