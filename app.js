var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var config = require('./config');
const {Datastore} = require('@google-cloud/datastore');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Creates a client
const datastore = new Datastore({
    projectId: config.projectId,
    keyFilename: config.keyFilename
});



const PORT = process.env.PORT || 3000;

app.get('/getCustomers',(req,res)=>{
    var query = datastore.createQuery(['customer']);
    datastore.runQuery(query,(err,data)=>{
        if(err){
            console.log(err)
            res.send("Error!! Check the log");
            res.end();
        }  
        if(data.length == 0){
            res.send("No records found of kind customer");
            res.end();
        }
        else{
        res.status(200).send(data);
        res.end();
        }
             
    });
});

app.get('/getCustomer/:id',(req,res)=>{
    var id = req.params.id;
    var i =parseInt(id);
    var query = datastore.createQuery(['customer']).filter('customerid','=',i);
    datastore.runQuery(query,(err,data)=>{
        if(err){
            console.log(err)
            res.send("No customers!!");
            res.end();
        }  
         if(data.length == 0){
            res.send("No records with id " + id + " found");
            res.end();
        }
        else{
        res.send(data);      
        res.end();
        }
    });
});

app.listen(PORT, function(){
    console.log('listening on port: ', PORT);
  });