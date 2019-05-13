const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();


exports.addMac = functions.https.onRequest(async (req, res) => {
  const newMac = req.query.mac;
  await admin.database().ref('/macs').push({mac: newMac});
  res.send("Mac saved");
});


exports.addMacFile = functions.https.onRequest(async (req, res) => {
  const apName = req.query.apName;
  const newMacFile = req.body;
  await admin.database().ref('/mac-files').push({apName: apName, macFile: newMacFile});
  res.send("Mac File saved");
});
