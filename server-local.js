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

    let capture = await page.evaluate(() => {
        const canvas = document.querySelector(".printable canvas");
        return canvas.toDataURL('image/png');
    });

    //let capture = await page.screenshot({type: 'png'})
    await browser.close();
    return capture;
};

app.get('/v-a4', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=v-a4').then(function(source){
        res.json({ imgdate: source })
    })
});

app.get('/h-a4', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=h-a4').then(function(source){
        res.json({ imgdate: source })
    })
});

app.get('/v-a5', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=v-a5').then(function(source){
        res.json({ imgdate: source })
    })
});

app.get('/h-a5', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=h-a5').then(function(source){
        res.json({ imgdate: source })
    })
});

app.get('/v-a6', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=v-a6').then(function(source){
        res.json({ imgdate: source })
    })
});

app.get('/h-a6', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=h-a6').then(function(source){
        res.json({ imgdate: source })
    })
});

app.get('/igf', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=igf').then(function(source){
        res.json({ imgdate: source })
    })
});

app.get('/igs', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=igs').then(function(source){
        res.json({ imgdate: source })
    })
});

app.get('/dmc', function(req, res){
    let user = req.query.user;
    run('https://rpay.app/'+user+'?print=dmc').then(function(source){
        res.json({ imgdate: source })
    })
});
