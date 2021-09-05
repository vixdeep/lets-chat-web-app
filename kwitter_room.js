
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
       user_name = localStorage.getItem("username");
       document.getElementById("user_name").innerHTML = "welcome, " + user_name + "!";
      //Start code

      //End code

console.log("room name" + Room_names);
row = "<div class = 'room_name' id = "+ Room_names + "onclick = 'redirecttoroomname(this.id)'>" + Room_names + "</div><hr>"
document.getElementById("output").innerHTML = row;
      });});}
getData();

function add_room(){
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpuse:"adding room name"

      });
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
}


function redirecttoroomname(name){
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}