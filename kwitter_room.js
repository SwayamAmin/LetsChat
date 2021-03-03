
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD3WN778sTdZEilR4mGT7hPvI4ujkrK0Sg",
      authDomain: "kwitter-ffb03.firebaseapp.com",
      databaseURL: "https://kwitter-ffb03-default-rtdb.firebaseio.com",
      projectId: "kwitter-ffb03",
      storageBucket: "kwitter-ffb03.appspot.com",
      messagingSenderId: "43243196489",
      appId: "1:43243196489:web:152736559fce38ee1eef98"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
