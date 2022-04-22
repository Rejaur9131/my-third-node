const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h2>Whooh it is working... A long way to find it</h2>');
});

const users = [
  { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01620493820' },
  { id: 2, name: 'Shabnoor', email: 'sabnoor@gmail.com', phone: '01620493820' },
  { id: 3, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '01620493820' },
  { id: 4, name: 'Suchonda', email: 'suchonda@gmail.com', phone: '01620493820' },
  { id: 5, name: 'Srabonti', email: 'srabonti@gmail.com', phone: '01620493820' },
  { id: 6, name: 'Sabila', email: 'sabila@gmail.com', phone: '01620493820' },
  { id: 7, name: 'Shohana', email: 'shohana@gmail.com', phone: '01620493820' }
];

app.get('/users', (req, res) => {
  // Filter by query parameter

  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) => user.name.toLowerCase().includes(search));
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get('/user/:id', (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  res.send(user);
});

app.post('/user', (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log('Listening to port:', port);
});
