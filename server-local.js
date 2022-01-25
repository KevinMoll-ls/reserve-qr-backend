'use strict';
const puppeteer = require("puppeteer");
const express = require('express');
const app = express();

app.listen(3000, () => console.log('Local app listening on port 3000!'));

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

app.get('/v-a4', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user).then(function(source){
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': source.length
        });
        res.end(source);
    })
});

app.get('/h-a4', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user).then(function(source){
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': source.length
        });
        res.end(source);
    })
});

app.get('/v-a5', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user).then(function(source){
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': source.length
        });
        res.end(source);
    })
});

app.get('/h-a5', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user).then(function(source){
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': source.length
        });
        res.end(source);
    })
});

app.get('/v-a6', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user).then(function(source){
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': source.length
        });
        res.end(source);
    })
});

app.get('/h-a6', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user).then(function(source){
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': source.length
        });
        res.end(source);
    })
});

app.get('/igf', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user).then(function(source){
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': source.length
        });
        res.end(source);
    })
});

app.get('/igs', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user).then(function(source){
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': source.length
        });
        res.end(source);
    })
});

app.get('/dmc', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user).then(function(source){
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': source.length
        });
        res.end(source);
    })
});
