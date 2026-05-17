importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB3dhbhLLqcXeF9UgGdslyLnQNVpDIEsc0",
  authDomain: "messangerall.firebaseapp.com",
  projectId: "messangerall",
  storageBucket: "messangerall.firebasestorage.app",
  messagingSenderId: "969711008260",
  appId: "1:969711008260:web:b35063a884a85419fc9351",
  databaseURL: "https://messangerall-default-rtdb.europe-west1.firebasedatabase.app"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png'
  });
});
