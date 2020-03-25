const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification = (notification) => {

   return admin.firestore().collection('notifications').add(notification).then(doc => console.log('Notif Added'))

}

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc => {

    const project = doc.data();
    const notification = {
        content:'Added new Project',
        user : `${project.authorFirstName} ${project.authorLastName}`,
        time : admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)

})

exports.newUser = functions.firestore.document('users/{userId}').onCreate(doc => {

    const newUser = doc.data();
    const notification = {
        content: 'Joined the party',
                 user: `${newUser.firstName} ${newUser.lastName}`,
                 time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)

})

