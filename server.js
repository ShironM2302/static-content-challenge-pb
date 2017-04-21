var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var app = express();

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

var showdown = require('showdown');
var converter = new showdown.Converter();

app.get('/', function (req, res) {
    res.sendStatus(200).sendFile(__dirname + '/template.html');
});

app.get('/about-page', function (req, res) {
    fs.readFile(__dirname + '/content/about-page/index.md', 'utf-8', function (error, data) {
        if (error) {
            res.render('404, file not found');
        }
        else {
            // console.log(data);
            var html = converter.makeHtml(data);
            // console.log(html);
            res.render('template.html', {
                content: html
            });
            res.sendStatus(200);
        }
    });
});

app.get('/jobs', function (req, res) {
    fs.readFile(__dirname + '/content/jobs/index.md', 'utf-8', function (error, data) {
        if (error) {
            res.render('404, file not found');
        }
        else {
            // console.log(data);
            var html = converter.makeHtml(data);
            // console.log(html);
            res.render('template.html', {
                content: html
            });
            res.sendStatus(200);
        }
    });
});

app.get('/valves', function (req, res) {
    fs.readFile(__dirname + '/content/valves/index.md', 'utf-8', function (error, data) {
        if (error) {
            res.render('404, file not found');
        }
        else {
            // console.log(data);
            var html = converter.makeHtml(data);
            // console.log(html);
            res.render('template.html', {
                content: html
            });
            res.sendStatus(200);
        }
    });
});

app.listen(3000);