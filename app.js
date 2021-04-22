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
app.get('/login',(req,res)=>{
    res.render('login')
})
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/doLogin',(req,res)=>{
    var role = req.body.role;
    var adminValue ='';
    if(role=='admin')
        adminValue = true;
    
    res.render('home',{
        pageTitle : 'Home page',
        admin: adminValue
    })
    
})

hbs.registerHelper('taoCombo',(city)=>{
    var cities = city.split(';')
    var combo = '<select>';
    for(i=0;i<cities.length;i++){
        combo = combo.concat('<option>'+ cities[i] + '</option>')
    }
    combo = combo.concat('</select>');
    console.log(combo);
    return combo;
})

hbs.registerHelper('toUpper',(msg)=>{
    return msg.toUpperCase();
})

app.listen(5000)
console.log('Server is running!')