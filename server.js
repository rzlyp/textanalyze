var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./app/routes/api');
app.use(bodyParser());
app.set('view-engine','ejs');


app.use(router);

app.get('/cognitive',function(req,res){
    res.render('images.ejs');
});
app.get('/',function(req,res){
    res.render('analyze.ejs');
});
app.listen(3000,function(){
    console.log('running on 3000');
});
