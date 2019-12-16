const express = require('express');
const mongoose = require('mongoose');
const Note = require('./models/Notes');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect("mongodb+srv://Admin:123456789q@todoscluster-jweuz.mongodb.net/TodoDatabase?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log("connected!");
})

const PORT = 5000;

app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/getAllNotes', async (req,res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch(err) {
        res.json({message : err});
    }
});

app.get('/getSpecificNote/:noteId', async (req,res) => {
    try {
        const note = await Note.findById(req.params.noteId);
        res.json(note)
    } catch(err) {
        res.json({message : err});
    }
});

app.delete('/deleteSpecificNote/:noteId', async (req,res) => {
    try {
        const note = await Note.remove({_id : req.params.noteId});
        res.json(note)
    } catch(err) {
        res.json({message : err});
    }
});

app.patch('/updateNote/:noteId', async (req,res) => {
    try {
        const note = await Note.updateOne({_id : req.params.noteId},
                                {$set : {items : req.body.items}});
        res.json(note)
    } catch(err) {
        res.json({message : err});
    }
});

app.post('/createNote', async (req,res) => {
    const note = new Note({
        _id : req.body._id,
        name : req.body.name,
        create : req.body.create,
        changed : req.body.create,
        items : [],
        isExist : req.body.isExist
    })
    try {
        const savedNote = await note.save();
        res.json(savedNote);
    } catch(err) {
        res.json({message : err});
    }
});

app.listen(PORT,() => {
    console.log("Started");
});