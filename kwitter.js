function addUser(){
    username = document.getElementById("username").value;

    localStorage.setItem("Username", username);
    console.log(username);
    window.location = "kwitter_room.html";
}
