var express = require('express');
var app = express();
app.set('view-engine','ejs');


app.get('/cognitive',function(req,res){
    res.render('images.ejs');
});
app.get('/',function(req,res){
    res.render('analyze.ejs');
});
var port = process.env.PORT || 4000;
app.listen(port,function(){
    console.log('listening on '+port);
});
