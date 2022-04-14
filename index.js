const mongoose = require('mongoose');
const express = require('express');
// const ForumEntry = require('./models/forum_entry');
const HelpEntry = require('./models/help');
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
app.use(cors());

require('dotenv').config()


mongoose.connect(process.env.MONGODB, { useNewUrlParser: true , useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// const InsertHelp = async(author, title, desc, thumbnail, url) => {
//     try {
//         const entry = new HelpEntry({ author: author, title: title, desc: desc, thumbnail: thumbnail, url: url });
//         await entry.save();
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// (async() => {
//     await InsertHelp("zinzy", "Publikowanie plików (Teams)", "Chcesz udostępnić pliki swoim uczniom? Tak będzie najłatwiej", "https://i.ytimg.com/vi/Q-z-q-z-q-Q/maxresdefault.jpg", "https://docs.google.com/presentation/d/1oE7jgJ3u8eYIb0XwkPfp9VliK9tDcStb/edit?usp=sharing&ouid=110285287655866718197&rtpof=true&sd=true"); 
//     await db.close(); 
// })();

app.get("/help", async (req, res) => {
    const entries = await HelpEntry.find();
    res.send(entries);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
