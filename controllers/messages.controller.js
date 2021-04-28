/* pathのハンドリング用モジュール */
const path = require('path');

/* debugging benefitのためfunction() {}の形式 */
function getMessages(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.jpg'));
}

function postMessage(req, res) {
  res.send('Updating....');
}

module.exports = {
  getMessages,
  postMessage,
};
