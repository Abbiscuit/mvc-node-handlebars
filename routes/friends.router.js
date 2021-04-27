const express = require('express');

/* controller */
const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

/* middleware (for `friends`)*/
friendsRouter.use((req, res, next) => {
  console.log('ip address:', req.ip);
  next();
});
/* routes */
friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;
