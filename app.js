'use strict';
const puppeteer = require("puppeteer");
const express = require('express');
const app = express();

app.listen(3000, () => console.log('Local app listening on port 3000!'));

const run = async (url) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.setViewport({
        width: 1280,
        height: 800
    })

    await page.goto(url)

    await page.waitFor(2000);

    let capture = await page.evaluate(() => {
        const canvas = document.getElementById('botcanvas');

	let response = {
		imgData : canvas.toDataURL('image/png'),
		mmWidth : canvas.getAttribute('data-mm-width'),
		mmHeight : canvas.getAttribute('data-mm-height')
	}

	return response;
    });

    //let capture = await page.screenshot({type: 'png'})
    await browser.close();
    return capture;
};

app.get('/', function(req, res){
    res.send('Online');
});

app.get('/v-a4', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=v-a4').then(function(source){
        res.json({ img: source })
    })
});

app.get('/h-a4', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=h-a4').then(function(source){
        res.json({ img: source })
    })
});

app.get('/v-a5', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=v-a5').then(function(source){
        res.json({ img: source })
    })
});

app.get('/h-a5', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=h-a5').then(function(source){
        res.json({ img: source })
    })
});

app.get('/v-a6', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=v-a6').then(function(source){
        res.json({ img: source })
    })
});

app.get('/h-a6', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=h-a6').then(function(source){
        res.json({ img: source })
    })
});

app.get('/igf', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=igf').then(function(source){
        res.json({ img: source })
    })
});

app.get('/igs', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=igs').then(function(source){
        res.json({ img: source })
    })
});

app.get('/dmc', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=dmc').then(function(source){
        res.json({ img: source })
    })
});


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World! From OpenLiteSpeed NodeJS\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://:/`);
});