importScripts("https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyBDVUswYSUrKDZuuNS_1_KOQvGStpQCTTQ",
    authDomain: "fir-chat-angular-234df.firebaseapp.com",
    databaseURL: "https://firebase-chat-angular-default-rtdb.firebaseio.com",
    projectId: "firebase-chat-angular",
    storageBucket: "firebase-chat-angular.appspot.com",
    messagingSenderId: "582344153186",
    appId: "1:582344153186:web:102bd305ce63683c81593b"
});


const messaging = firebase.messaging();