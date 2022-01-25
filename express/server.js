'use strict';

const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const puppeteer = require("puppeteer");

const run = async (url) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setViewport({
      width: 1280,
      height: 800
  })

  await page.goto(url)

  let capture = await page.evaluate(() => {
      const canvas = document.querySelector(".printable canvas");
      return canvas.toDataURL('image/png');
  });

  //let capture = await page.screenshot({type: 'png'})
  await browser.close();
  return capture;
};

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});

router.get('/v-a4', (req, res) => {
  let user = req.query.user;
  run('https://rpay.app/'+user+'?print=v-a4').then(function(source){
    res.json({ imgdate: source })
  })
});

router.get('/another', (req, res) => res.json({ route: req.originalUrl }));

router.get('/h-a4', function(req, res){
  let user = req.query.user;
  run('https://rpay.app/'+user+'?print=h-a4').then(function(source){
    res.json({ imgdate: source })
  })
});

router.get('/v-a5', function(req, res){
  let user = req.query.user;
  run('https://rpay.app/'+user+'?print=v-a5').then(function(source){
    res.json({ imgdate: source })
  })
});

router.get('/h-a5', function(req, res){
  let user = req.query.user;
  run('https://rpay.app/'+user+'?print=h-a5').then(function(source){
    res.json({ imgdate: source })
  })
});

router.get('/v-a6', function(req, res){
  let user = req.query.user;
  run('https://rpay.app/'+user+'?print=v-a6').then(function(source){
    res.json({ imgdate: source })
  })
});

router.get('/h-a6', function(req, res){
  let user = req.query.user;
  run('https://rpay.app/'+user+'?print=h-a6').then(function(source){
    res.json({ imgdate: source })
  })
});

router.get('/igf', function(req, res){
  let user = req.query.user;
  run('https://rpay.app/'+user+'?print=igf').then(function(source){
    res.json({ imgdate: source })
  })
});

router.get('/igs', function(req, res){
  let user = req.query.user;
  run('https://rpay.app/'+user+'?print=igs').then(function(source){
    res.json({ imgdate: source })
  })
});

router.get('/dmc', function(req, res){
  let user = req.query.user;
  run('https://rpay.app/'+user+'?print=dmc').then(function(source){
    res.json({ imgdate: source })
  })
});

router.get('/another', (req, res) => res.json({ route: req.originalUrl }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
