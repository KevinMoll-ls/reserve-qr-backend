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

  // set the size of the viewport, so our screenshot will have the desired size
  await page.setViewport({
    width: 1280,
    height: 800
  })

  await page.goto(url)
  let capture = await page.screenshot({type: 'png'})
  await browser.close();
  console.log('run');

  return capture;
};

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});

router.get('/va4', (req, res) => {
  let user = req.query.user;
  run('https://rpay.app/'+user).then(function(source){
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': source.length
    });
    res.end(source);
  })
});

router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
