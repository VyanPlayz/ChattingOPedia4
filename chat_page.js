var firebaseConfig = {
    apiKey: "AIzaSyBEpaol-TylW3eio0tKgX1t3IGKrrzzjkY",
    authDomain: "letschat-web-app-ae6ee.firebaseapp.com",
    databaseURL: "https://letschat-web-app-ae6ee-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-ae6ee",
    storageBucket: "letschat-web-app-ae6ee.appspot.com",
    messagingSenderId: "697370552038",
    appId: "1:697370552038:web:1e4cc064e577970c517d27"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("roomname");
  user_name = localStorage.getItem("user_name");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("roomname");
        localStorage.removeItem("user_name");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message =  "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();