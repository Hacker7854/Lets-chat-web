var firebaseConfig = {
  apiKey: "AIzaSyBIawAaPbxOX4VeAViDZdreHrHKi0ggKow",
  authDomain: "practiceclass-da366.firebaseapp.com",
  databaseURL: "https://practiceclass-da366-default-rtdb.firebaseio.com",
  projectId: "practiceclass-da366",
  storageBucket: "practiceclass-da366.appspot.com",
  messagingSenderId: "538192482774",
  appId: "1:538192482774:web:3184539832fab870045477"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 

firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

