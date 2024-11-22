import { MongoClient } from "mongodb";

export default async function connectionDataBase(connectionString) {
  let mongoClient;

  try{
    mongoClient = new MongoClient(connectionString);
    console.log("Conectando ao cluster do BD");
    await mongoClient.connect();
    console.log("Conectado ao BD");

    return mongoClient;
  } catch(erro){
    console.error("ERRO AO CONEXTAR", erro);
    process.exit();
  }
}