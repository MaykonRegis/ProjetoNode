const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
//const hbs = handlebars.create({/* config */})

app.use(express.static('public')) // TRAZENDO O CSS

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/cadastro', function(req, res){
    res.render('cadastro');
})

app.get('/home', function(req, res){
    res.render('home');
})

app.get('/error', function(req, res){
    res.render('error');
})

app.get('/login', function(req, res){
    res.render('login');
})

app.get('/sobre', function(req, res){
    res.render('sobre');
})

app.get('/sistema', function(req, res){
    res.render('sistema');
})

app.get('/fatorial', function(req, res){
    res.render('fatorial');
})

app.get('/contagem', function(req, res){
    res.render('contagem');
})

app.get('/idade', function(req, res){
    res.render('idade');
})

app.get('/calculadora', function(req, res){
    res.render('calculadora');
})


app.listen(3030);