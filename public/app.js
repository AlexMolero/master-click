let text        = document.querySelector("#chat");
let sendButton  = document.querySelector("#sendButton");
let sendReset   = document.querySelector("#sendReset");
let textMessage = document.querySelector("#textMessage");

let usersConnected = document.getElementById("counter");
let numClicksText  = document.getElementById("clicksTxt");
let clickText  = document.getElementById("userClicks");
let userNameText  = document.getElementById("userName");
let mediaText  = document.getElementById("media");

let userCounter = 0;

const urlParams = new URLSearchParams(window.location.search);

const socket = io();

socket.on("message", (data) => {
    const d = document.createElement("div");
    const t = document.createTextNode(data.username + ": " + data.message);
    d.appendChild(t);
    text.appendChild(d);
});

socket.on("usuario conectado", (data) => {
    const d = document.createElement("div");
    d.classList.add("joined");
    const t = document.createTextNode(
        "El usuario " + data.username + " se ha conectado"
    );
    d.appendChild(t);
    text.appendChild(d);

    usersConnected.innerText = data.usersConnected;
});

socket.on("usuario desconectado", (data) => {
    const d = document.createElement("div");
    d.classList.add("joined");
    const t = document.createTextNode(
        "El usuario " + data.username + " se ha desconectado!"
    );
    d.appendChild(t);
    text.appendChild(d);

    usersConnected.innerText = data.usersConnected;
});

socket.on("connect", () => {
    socket.emit("iam", urlParams.get("user"));
    //console.log("User connected" + urlParams.get("user"));
    userNameText.innerText = urlParams.get("user");
});

socket.on("numero de usuarios", (data) => {
    usersConnected.innerText = data.usersConnected;
    numClicksText.innerHTML = data.numClicks;
});
socket.on("new click", (data) => {
    numClicksText.innerText = data.numClicks;
});

socket.on("do reset", (data) => {
    numClicksText.innerText = data.numClicks;
});

socket.on("user click", (data) => {
    clickText.innerText = data.clickUser;
    mediaText.innerText = data.message;

});

sendButton.onclick = () => {
    socket.emit("click", "");
};
sendReset.onclick = () => {
    socket.emit("reset", "");
};