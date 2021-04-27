const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const friends = [
  {
    id: 0,
    name: 'Einstain',
  },
  {
    id: 1,
    name: 'Isaac Newtooon',
  },
];

app.get('/', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exist',
    });
  }
});

app.get('/messages', (req, res) => {
  res.send('<ul><li>Helloooo</li></ul>');
});

app.post('/messages', (req, res) => {
  res.send('Updating....');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
