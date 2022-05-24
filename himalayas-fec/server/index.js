const express = require("express");
const expressStaticGzip = require('express-static-gzip');
const path = require("path");
const axios = require("axios");


const app = express();

app.use(
  expressStaticGzip(path.join(__dirname, '../client/dist'), {
    enableBrotli: false,
  })
);

app.use(express.json());


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
})

const PORT = 3001;

app.listen(PORT, () => {
  console.log(path.join(__dirname, '../client/dist', 'index.html'));
  console.log(`Listening on port ${PORT}...`);
});