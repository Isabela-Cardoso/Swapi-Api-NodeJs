# api-swapi-nodejs

# Linguagens utilizadas

Esta aplicação foi desenvolvida em Node.Js e MongoDb.

# Explicação de cada arquivo e estrutura:

Index.js : realiza a conexão com o express, com o banco de dados (online) e conecta o servidor com o navegador.

src/crontrollers/planetasController.js: realiza a conexão com a API pública do Star Wars-SWAPI além de realizar as seguintes funções: Listar os planetas cadastrados no banco de dados, realiza a busca de cada planeta por nome e ID e deleta o planeta pelo seu ID.

src/model/planetaModel.js: estrutura o Schema a ser utilizado no banco de dados através do mongoose.

src/routes/rotaApi: direciona cada função rest para uma rota específica no servidor de modo a separar cada funcionaliade.

# Como rodar o arquivo:

1) Clonar o repositório 
2) npm install 
3) npm install nodemon
4) npm install dependencies
5) Para executar o arquivo utiliza-se, dentro da pasta src, nodemon index.js 

# Vizualização
 O projeto pode ser vizualizado através de aplicações externas como Imsomnia e Postman.
