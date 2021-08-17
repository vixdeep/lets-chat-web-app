
var firebaseConfig = {
      apiKey: "AIzaSyBoan30nnumwtIf179sXGvAdpEmPGv1-RM",
      authDomain: "class-test-79c04.firebaseapp.com",
      databaseURL: "https://class-test-79c04-default-rtdb.firebaseio.com",
      projectId: "class-test-79c04",
      storageBucket: "class-test-79c04.appspot.com",
      messagingSenderId: "341201686986",
      appId: "1:341201686986:web:56bc091f661fe5e7e17f33"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
