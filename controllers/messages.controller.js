/* debugging benefitのためfunction() {}の形式 */
function getMessages(req, res) {
  res.render('messages', {
    title: 'Messages to my friends!',
    friend: 'Elon Musk',
  });
}

function postMessage(req, res) {
  res.send('Updating....');
}

module.exports = {
  getMessages,
  postMessage,
};
