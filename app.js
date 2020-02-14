var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var authorCtrl = require('./src/controllers/author')

// var mongoBD = `mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb`;
 var mongoBD = `mongodb://127.0.0.1:27017/BooksDB`;
mongoose.connect(mongoBD,{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var app = express();
app.use(express.json());
app.use(cors());

app.listen(3000,(req,res)=>{
    authorCtrl(app);
    console.log(`Aplication Start in Port:[${3000}]`)
})