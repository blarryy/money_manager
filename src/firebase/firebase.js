import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCP58SIbSaVAGAIUpQSo8LZdSbrrPlyid8",
    authDomain: "moneymanager-9b44a.firebaseapp.com",
    databaseURL: "https://moneymanager-9b44a.firebaseio.com",
    projectId: "moneymanager-9b44a",
    storageBucket: "moneymanager-9b44a.appspot.com",
    messagingSenderId: "612313003267"
  };

firebase.initializeApp(config);

const database = firebase.database();  
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export { firebase, googleAuthProvider, database as default };



// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()  
//         });
//     });
//     console.log(expenses);
// });
// database.ref('expenses').push({
//     description: 'Rent',
//     note:'',
//     amount: 109500,
//     createdAt: 9237599300
// });


// database.ref('expenses').push({
//     description: 'lunch',
//     note:'',
//     amount: 1200,
//     createdAt: 9237599300
// });










// const notes = [{
//     id: '12',
//     title:'first note',
//     body:'this my note'
// }, {
//     id: '76',
//     title:'another note',
//     body:'this also my note'
// }];

// database.ref('notes').set(notes);
// database.ref('notes')



// database.ref().set({
//     name:'Barry',
//     age: 22,
//     stresslevel: 4,
//     job: {
//         title:'Softeware Engineer',
//         company: 'Amazon'
//     },
//     isSingle: true,
//     location: {
//         city: 'SC',
//         country: 'US'
//     }
//   }).then(() => {
//     console.log('Data is saved');
//   }).catch((e) => {
//     console.log('this failed', e);
//   });


// //   database.ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('Santa Cruz');

// database.ref('attributes').set({
//     height:6,
//     weight:164
// });



