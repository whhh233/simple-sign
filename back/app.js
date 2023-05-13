const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors=require('cors')
const https=require('https')
const fs=require('fs')
const options={
      key:fs.readFileSync('./ssl/privkey.pem'),
      cert:fs.readFileSync('./ssl/fullchain.pem')
    };
app.use(cors())
app.use(express.static('../front'));
app.use(cookieParser(info.cookieParser))
// app.use(cookieParser(info.cookieParser))
https.createServer(options,app).listen(16666);

app.get("/verify", (req, res) => {
  const uses = require("./tmp.json")
  let use = null;
  uses.forEach((e) => {
    if (e.name == req.query.name) {
      use = e;
      return;
    }
  });

  if (!use) {
    res.json({state:'no'});
  } else if (req.query.pass && req.query.pass == use.pass) {
    res.json({state:'yes'});
  } else res.json({state:'no'});
});


