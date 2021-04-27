/* debugging benefitのためfunction() {}の形式 */
function getMessages(req, res) {
  res.send('<ul><li>Helloooo</li></ul>');
}

function postMessage(req, res) {
  res.send('Updating....');
}

module.exports = {
  getMessages,
  postMessage,
};
