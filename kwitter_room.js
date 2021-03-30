user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
var firebaseConfig = {
  apiKey: "AIzaSyCSXltsqcj2sOJSIG2z8TQ9my6B5qC616E",
  authDomain: "kwitter-78875.firebaseapp.com",
  databaseURL: "https://kwitter-78875-default-rtdb.firebaseio.com",
  projectId: "kwitter-78875",
  storageBucket: "kwitter-78875.appspot.com",
  messagingSenderId: "226382584287",
  appId: "1:226382584287:web:b4f2bc7352ae270ce68c6a"
};
firebase.initializeApp(firebaseConfig);

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_name = childKey;
      console.log("roomname+roomname"+Room_name);
      row="<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+Room_name+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
    });
  });
}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}