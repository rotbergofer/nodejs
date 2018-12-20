var express = require('express');
var app = express();

app.set('view engine','jade');
app.get('/',  function(req,res)
    {   
        res.render('index', 
        {
            title:"Rotberg's Page",message:'Welcome'
        })
    });
var server = app.listen(8080,function(){});
