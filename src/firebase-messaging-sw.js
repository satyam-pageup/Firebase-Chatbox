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

// firebase.initializeApp({
//     apiKey: "AIzaSyB0w-xIHXmUC9x0hSUOpjQxQ6yw-oOH2bY",
//     authDomain: "push-notification-angular-demo.firebaseapp.com",
//     projectId: "push-notification-angular-demo",
//     storageBucket: "push-notification-angular-demo.appspot.com",
//     messagingSenderId: "978475383395",
//     appId: "1:978475383395:web:0334d6826f6f8205d9d656"
// });


const messaging = firebase.messaging();