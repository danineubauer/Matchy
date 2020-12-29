const express = require("express");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/client", express.static("public"));

app.use('/', routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`🌎 app listening on localhost:${PORT}`);
});
