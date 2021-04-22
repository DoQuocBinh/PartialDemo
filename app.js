const express = require('express')
const hbs = require('hbs')

const app = express()
app.set('view engine','hbs')
hbs.registerPartials(__dirname +'/views/partials')

app.get('/about',(req,res)=>{
    res.render('about',{
        pageTitle : 'About Page'
    })
})
app.get('/',(req,res)=>{
    var adminValue = '';
    res.render('home',{
        pageTitle : 'Home page',
        admin: adminValue
        })
    }   
)

app.listen(5000)
console.log('Server is running!')