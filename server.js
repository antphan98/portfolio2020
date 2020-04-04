const express = require("express");
const path = require('path')
require('dotenv').config()
const { join } = require("path");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

require("./routes/html-routes")(app);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });

  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  })