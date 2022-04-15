const express = require("express");
const expressStaticGzip = require('express-static-gzip');
const path = require("path");
const axios = require("axios");
// const compression = require('compression');

const app = express();

app.use(
  expressStaticGzip(path.join(__dirname, 'build'), {
    enableBrotli: false,
  })
);

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
// app.use(compression())

app.get('/*', (req, res) => {
  console.log(res);
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

const PORT = 3001;

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`Listening on port ${PORT}...`);
});