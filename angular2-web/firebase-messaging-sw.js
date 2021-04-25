
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyDeB7nnihu9P81mHQO5NNb4ASdHx0-jV34",
  authDomain: "fcm-angular2web.firebaseapp.com",
  projectId: "fcm-angular2web",
  storageBucket: "fcm-angular2web.appspot.com",
  messagingSenderId: "211273252424",
  appId: "1:211273252424:web:38be988b7f35fcc04e227d",
  measurementId: "G-2816X18K0F"
});
const messaging = firebase.messaging();
