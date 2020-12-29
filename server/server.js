const express = require("express");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/client", express.static("public"));

app.get("/", function (req, res) {
  res.send("heya!");
});

app.put("/", function (req, res) {
  res.send("Got a POST request");
  console.log("put");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 app listening on localhost:${PORT}`);
});
