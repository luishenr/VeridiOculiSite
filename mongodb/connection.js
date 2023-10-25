const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/veridiOculi';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connection() {
  try {
    await client.connect();
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
  }
}

module.exports = { client, connection };
