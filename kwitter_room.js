firebaseConfig = {
    apiKey: "AIzaSyC_W5GKjksZ9ZNy_rWOewpfZuGvzBERo0E",
    authDomain: "project-893c4.firebaseapp.com",
    projectId: "project-893c4",
    storageBucket: "project-893c4.appspot.com",
    messagingSenderId: "1086392269098",
    appId: "1:1086392269098:web:2dd5b0898ad21886748653",
    measurementId: "G-XR36QLJVW7"
  };

function redirectToRoomName(name) { 
    console.log(name); 
    localStorage.setItem("Room_name", name);
    window.location = "kwitter_page.html"; 
}

function logout() { 
    localStorage.removeItem("user_name"); 
    localStorage.removeItem("Room_name"); 
    window.location = "index.html";
}
