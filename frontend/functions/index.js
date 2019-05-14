const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.createProfile = functions.auth.user()
  .onCreate( (userRecord, context) => {
    return admin.database().ref(`/userProfile/${userRecord.data.uid}`).set({
      email: userRecord.data.email,
      firstName: userRecord.data.firstName,
      lastName: userRecord.data.lastName,
    });
  });

exports.addMac = functions.https.onRequest(async (req, res) => {
  const newMac = req.query.mac;
  await admin.database().ref('/macs').push({mac: newMac});
  res.send("Mac saved");
});


exports.addMacFile = functions.https.onRequest(async (req, res) => {
  const apName = req.query.apName;
  const newMacFile = req.body;

  let filteredMacFile = newMacFile.toString().replace(/assoclist /g,'');
  console.log(filteredMacFile[0].toString());

  //filteredMacFile['apName'] = apName;

  await admin.database().ref('/mac-files').push({test: filteredMacFile.toString()});

  res.send("Mac File saved");
});
