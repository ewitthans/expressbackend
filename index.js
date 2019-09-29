const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json())

USERS = [
    {
        title: "Administrator",
        username: "admin",
        password: "admin",
        url: "https://drive.google.com/embeddedfolderview?id=1A1YjETJ4-W7hpRKssq-UuGG9lHGrisbr#list"
    },
    {
        title: "Homestead Shared",
        username: "homestead",
        password: "recording",
        url: "https://drive.google.com/embeddedfolderview?id=1A1YjETJ4-W7hpRKssq-UuGG9lHGrisbr#list"
    },
    {
        title: "Artist",
        username: "artist",
        password: "artist",
        url: "https://drive.google.com/embeddedfolderview?id=10h4XFRzQrsiaw9fFaJpDdVTb8HTdq-DW#list"
    }
];

app.get('/get', (req, res) => {
    //console.log('get initiated');
    return res.send(USERS);
});

app.post('/post', (req, res) => {
    //console.log('post initiated')
    USERS.push(req.body);
    res.sendStatus(201);
});

app.delete('/delete', (req, res) => {
    //console.log('delete initiated');
    USERS = USERS.filter(u => u.username != req.query.username);
    res.sendStatus(201);
});

app.listen(port, () => console.log('Homestead Backend Server started on ' + port));