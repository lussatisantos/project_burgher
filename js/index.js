const express = require('express')
const app = express()



app.get('/index', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/teste', function(req, res) {
    res.send('Testando')
})


app.listen (9899, function (req, res) {
    console.log('Ligado')
})


