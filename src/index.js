const express = require ('express');
const bodyParser = require ('body-parser')
const MongoClient = require ('mongodb').MongoClient;

const app = express();

let rotaApi = require ("./routes/rotaApi")

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

//Conectando ao mongodb


const uri = "mongodb+srv://admin:njoy99@cluster0.ueanf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("starwars").collection("data");
  db = client.db('starwars')

  console.log('Conectado ao Mongodb!')
});

//

app.use('/', rotaApi)

app.get('/', (req, res) => res.send ('Deu bom ai'))

app.listen(3000);
