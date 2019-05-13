const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();


exports.addMac = functions.https.onRequest(async (req, res) => {
  const newMac = req.query.mac;
  await admin.database().ref('/macs').push({mac: newMac});
  res.send("Mac saved");
});
