// --------------------------1-------------------
const user = {
  firstName: 'Petya',
  lastName: 'Ivanov',
  age: 25,
  job: {
    company: 'iTechArt',
    position: 'webDev',
    skills: ['JS', 'HTML', 'Css'],
  },
};
const {
  firstName: myName = 'noname',
  job: { company: myCompany = 'epam' },
} = user;
console.log(myName);
console.log(myCompany);
// ------------------------2---------------------
// const firebaseConfig = {
//   apiKey: 'AIzaSyDoSq6dXig-d6ifBXPTcsVy3Zv47hLMwRQ',
//   authDomain: 'homework-df013.firebaseapp.com',
//   databaseURL: 'https://homework-df013-default-rtdb.firebaseio.com',
//   projectId: 'homework-df013',
//   storageBucket: 'homework-df013.appspot.com',
//   messagingSenderId: '372903942043',
//   appId: '1:372903942043:web:d6a0f72c44a57e5087733e',
// };

// firebase.initializeApp(firebaseConfig);

// const databaseURL = 'https://homework-df013-default-rtdb.firebaseio.com';
// const userName = document.querySelector('#name');
// const userSurname = document.querySelector('#surname');
// const userAge = document.querySelector('#age');

// document.querySelector('#insert').onclick = () => {
//   fetch(`${databaseURL}/users.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       userName,
//       userSurname,
//       userAge,
//     }),
//   });
//   console.log('working');
// };

// document.querySelector('#delete').onclick = () => {
//   fetch(`${databaseURL}/users.json`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((result) => console.log(result));
// };
