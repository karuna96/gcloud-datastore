var express = require("express");
var app = express();
var http = require("http").Server(app);
var config = require('./config');
// const {Datastore} = require('@google-cloud/datastore');

// // Creates a client
// const datastore = new Datastore({
//     projectId: config.projectId,
//     keyFilename: config.keyFilename
// });



const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    // var query = datastore.createQuery(['customer'])
    // datastore.runQuery(query,(err,customers)=>{
    //     if(err){
    //         console.log(err)
    //         res.send("No customers!!")
    //     }  
    //     res.send(customers);      
    // });
    res.send('HEELLOOO');
});

http.listen(PORT, function(){
    console.log('listening on port: ', PORT);
  });