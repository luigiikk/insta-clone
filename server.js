import e from "express";

const app = e();

app.get("/api", (req,res) => {
  res.send("Ola mundo");
})

app.listen(5555, () => {
  console.log("HTTP RUNNING 🚀");
})