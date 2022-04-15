const mongoose = require('mongoose');
const express = require('express');
// const ForumEntry = require('./models/forum_entry');
const HelpEntry = require('./models/help');
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
app.use(cors());

// require('dotenv').config()


mongoose.connect(process.env.MONGODB, { useNewUrlParser: true , useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const InsertHelp = async(author, title, desc, thumbnail, url) => {
    try {
        const entry = new HelpEntry({ author: author, title: title, desc: desc, thumbnail: thumbnail, url: url });
        await entry.save();
    }
    catch (error) {
        console.log(error);
    }
}

app.get("/help", async (req, res) => {
    const entries = await HelpEntry.find();
    res.send(entries);
});

app.post("/append", async (req, res) => {
    const { author, title, desc, thumbnail, url } = req.body;
    await InsertHelp(author, title, desc, thumbnail, url);
    res.send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
