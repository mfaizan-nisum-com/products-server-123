const express = require("express");
const { GENDER } = require("./constants");
const maleProducts = require("./data/male-products.json");
const femaleProducts = require("./data/female-products.json");
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Products NodeJS Server </h1>");
});

app.get("/getProducts/:gender", (request, response) => {
  const gender = request.params.gender;

  if (gender === GENDER.MALE) {
    response.status(200).send(maleProducts);
  } else if (gender === GENDER.FEMALE) {
    response.status(200).send(femaleProducts);
  } else {
    response.status(500).send({ error: { message: "Invalid Gender" } });
  }
});

app.get("/getProducts", (request, response) => {
  const user = request.body?.user;
  const gender = user?.gender;
  if (gender === GENDER.MALE) {
    response.status(200).send(maleProducts);
  } else if (gender === GENDER.FEMALE) {
    response.status(200).send(femaleProducts);
  } else {
    response.status(500).send({ error: { message: "Invalid Gender" } });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listen on the port ", process.env.PORT || 3000);
});
