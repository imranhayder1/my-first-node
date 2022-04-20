const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Happy, I can code node now');
})

const users = [
    { id: 1, name: "sabana", email: "sabana@gmail.com", phone: "01799999991" },
    { id: 2, name: "sabnor", email: "sabnor@gmail.com", phone: "01799999992" },
    { id: 3, name: "srabonti", email: "srabonti@gmail.com", phone: "01799999993" },
    { id: 4, name: "sabila", email: "sabila@gmail.com", phone: "01799999994" },
    { id: 5, name: "sohana", email: "sohana@gmail.com", phone: "01799999995" },
    { id: 6, name: "sohagi", email: "sohagi@gmail.com", phone: "01799999996" },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    // console.log(req.params);
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.listen(port, () => {
    console.log('Hello World', port);
})