require('dotenv').config()
const express = require('express')
const app = express()
//const yargs = require('yargs/yargs')
//const { hideBin } = require('yargs/helpers')
//const argv = yargs(hideBin(process.argv)).argv
const PROCESS_DATA = require('./process')
const serverRouter = require('./routes/router')
//const PORT = parseInt(port) || process.env.PORT
const PORT = parseInt(process.env.watch) || process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.set('views', './views/layouts')

//let mode = argv._[0]
//let port = argv._[1]

app.get('/', (req, res) => {
    res.send('BIENVENIDO AL DESAFIO DE PROCESS OBJECT.')
})

app.get('/welcome', (req, res)=>{
    res.send(`Servidor express NGINX en PORT ${PORT}, PID ${process.pid}`)
})

app.get('/info', (req, res)=>{
    res.render('index', PROCESS={PROCESS_DATA})
})

serverRouter(app)

app.listen(PORT, () => {
    console.log(`Estas conectado a http://localhost:${PORT}`)
})
