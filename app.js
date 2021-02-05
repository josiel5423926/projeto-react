const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const buscaCep = require('./function/buscaCep')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.set('view engine', 'ejs')

app.set('views', './views')


app.get('/', (req, res) => {

    res.render('index')
})


app.post('/envia-cep', async (req, res) => {
    const { cep } = req.body
    const resultado = await buscaCep(cep)

    res.render('resultado', {dado: resultado})
})

app.listen(4040)