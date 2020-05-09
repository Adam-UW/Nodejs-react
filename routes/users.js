const express = require('express')
const router = express.Router()


router.get('/login', (req, res)=> res.render('login'))
router.get('/register', (req, res)=> res.render('register'))

//Register handle

router.post('/register', (req, res) =>{
    console.log(req.body)
    res.send('hello')
})




module.exports= router