const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://orpcy:sophew@cluster0-35d4g.mongodb.net/test?retryWrites=true", {useNewUrlParser: true})
.then(success => console.log("Db connected successfully!"))
.catch(error => console.log("Error connecting to database...", error));

const msgSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    reqquired: true
  }
});

const Message = mongoose.model("Message", msgSchema);

app.post("/api/message", (req, res) => {
  const { name, email, message } = req.body;
  Message.create({name, email, message}, (err, data) => {
    if(err) res.send(err);
    res.send(data);
  })
})

app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function(req, res) {
  return res.send("pong");
});
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, () => console.log(`listening on port ${port}`));
