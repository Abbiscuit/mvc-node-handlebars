const express = require('express');
const messagesController = require('./controllers/messages.controller');
const friendsController = require('./controllers/friends.controller');

const app = express();

const PORT = process.env.PORT || 3000;

/* data */
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

/* middleware */
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

/* routes */
app.post('/friends', friendsController.postFriend);
app.get('/friends', friendsController.getFriends);
app.get('/friends/:friendId', friendsController.getFriend);

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage);

/* server */
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
