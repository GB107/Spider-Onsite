const express = require('express')
const path = require('path');
const app = express();
const bodyparser = require('body-parser')
const bcrypt = require('bcrypt')

const port = process.env.PORT || 8000;

require('./db/conn');
const Register = require('./models/register');
const await = require('await');

// const Create=require('./models/groups');

app.use(express.json());
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "./views"))

app.get('/', async(req, res) => {
const shorturls= await Register.find()
    res.status(200).render('index',{shorturls:shorturls});
});

app.post('/shorturl',async(req,res)=>{
Register.create({full:req.body.fullurl})
res.redirect('/')
})

app.get('/shorturl',async(req,res) =>{
   const shorturls= await Register.findOne({short:req.body.shorturl})
   const fullss=await Register.findOne({short:req.body.fullurl})
   if(shorturls==null){
    return res.send.status(404)
    shorturls.save()
    res.redirect(shorturls.full)
   }
})
app.listen(port, () => {
    console.log(`the application succesfully running on port ${port}`);
});