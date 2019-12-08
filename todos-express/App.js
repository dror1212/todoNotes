const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Admin:123456789q@todoscluster-jweuz.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


function addItem(item,res) {
    client.connect(err => {
        const database = client.db("TodoDatabase");
        const collection = database.collection("todoList");
        collection.insertOne(item).then(() => {
            res.send("added");
        });
        //client.close();
    });
}

function deleteItemById(id) {
    client.connect(err => {
        const database = client.db("TodoDatabase");
        const collection = database.collection("todoList");
        collection.findOneAndDelete({_id :id});
        //client.close();
    });
}

function length(item,res) {
    client.connect(err => {
        const database = client.db("TodoDatabase");
        const collection = database.collection("todoList");
        const count = collection.countDocuments().then((count) => {
            res.send({count});
        });
        //client.close();
    });  
}

function getOneById(res,id) {
    client.connect(err => {
        const database = client.db("TodoDatabase");
        const collection = database.collection("todoList");
        const find = collection.findOne({_id :id}).then((find) => {
            res.send(find);
        });
        //client.close();
});   
}

function getAll(res) {
    client.connect(err => {
        const database = client.db("TodoDatabase");
        const collection = database.collection("todoList");
        collection.find({}).toArray(function(err, result) {
            res.send(result);
        });
        //client.close();
    });   
}

function updateOne(req) {
    client.connect(err => {
        const database = client.db("TodoDatabase");
        const collection = database.collection("todoList");
        const find = collection.findOneAndReplace({_id :req.body._id},newItem);
        //client.close();
    });   
}

const PORT = 5000;

const app = express();

app.get('/getAll',(req,res) => {
    getAll(res);
});

app.get('/getOne',(req,res) => {
    getOneById(res,req.body._id);
});

app.delete('/deleteById',(req,res) => {
    deleteItemById(req.body._id);
});

app.post('/add',(req,res) => {
    addItem(todosInfo,res);
});

app.put('/update',(req,res) => {
    updateOne(req);
});

app.listen(PORT,() => {
    console.log("Started");
});