const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    credentials: true,
    // origin: clientURL,
  })
);

const product = {
  id: 1,
  name: "Örnek Ürün",
  price: 29.99,
  currency: "TRY",
  category: "Elektronik",
  inStock: true,
};

app.get("/api/data", (req, res) => {
  res.send(product);
});

app.post("/api/update", (req, res) => {
  const value = req.body;

  res.status(200).json({
    message: "Successfully added",
    data: {
      value,
    },
  });
});

app.listen(port, () => {
  console.log(`The server running on ${port}.`);
});
