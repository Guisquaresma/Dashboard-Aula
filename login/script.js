function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Preencha todos os campos!");
    } else {
        window.location.href = "../index.html"; 
    }
}