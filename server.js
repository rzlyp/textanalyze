var express = require('express');
var app = express();
app.set('view-engine','ejs');


app.get('/cognitive',function(req,res){
    res.render('images.ejs');
});
app.get('/',function(req,res){
    res.render('analyze.ejs');
});
app.listen(3000,function(){
    console.log('running on 3000');
});
