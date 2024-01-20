require('dotenv').config()

const express = require('express');

const app =express();

const port = 4000
app.get('/', (req,res) => {
    res.end('hello chai aur code')
})
app.get('/home',(req,res)=>{
    res.end('home is located in the baghpat')
})
app.get('/loginpage' ,(req,res) =>{
    res.end('login krlo aajaega tumhe')
})
app.get('/helo', (req,res)=> {
    res.end('<h1>king from baghpat is here</h1>')
})
 app.listen(process.env.PORT, ()=>{
    console.log(`example are listening on the ${port}`)
 })