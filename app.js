var express = require("express");
var app = express();
var http = require("http").Server(app);

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('HEELLOOO');
});

http.listen(PORT, function(){
    console.log('listening on port: ', PORT);
  });