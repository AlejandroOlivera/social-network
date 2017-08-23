'use strict'

const express = require('express');
const app = express();

    app.set('view engine', 'pug');
    app.use(express.static(__dirname + '/public'));


app.get('/', (req,res) =>{
    res.render("index.pug", {layout:false});
})

app.get('/account/authenticated', function(req, res){
    if ( req.session.loggedIn){
        res.send(200)
    }else {
        res.send(401)
    }
})

app.listen(3001);