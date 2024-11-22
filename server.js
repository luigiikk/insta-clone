import e from "express";
import connectionDataBase from "./src/config/dbconfig.js";

await connectionDataBase(process.env.CONNECTION_STRING);
const app = e();

app.get("/api", (req,res) => {
  res.send("Ola mundo");
})

app.listen(5555, () => {
  console.log("HTTP RUNNING 🚀");
})