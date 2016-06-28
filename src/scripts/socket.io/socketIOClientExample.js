"use strict";

var socket = io(),

    formElem = document.getElementById("send-message-form"),
    messageField = document.getElementById("message-field"),
    messagesSentElem = document.getElementById("messages-sent"),
    messagesReceivedElem = document.getElementById("messages-received");

socket.on("data-from-server", function (data) {
    var pElem = document.createElement("p");
    pElem.innerHTML = new Date().toUTCString() + " - " + JSON.stringify(data);
    messagesReceivedElem.appendChild(pElem);
});

formElem.addEventListener("submit", function (e) {
    var message = {
            sent: messageField.value
        },
        pElem = document.createElement("p");
    e.preventDefault();

    socket.emit("data-from-client", message);

    pElem.innerHTML = new Date().toUTCString() + " - " + JSON.stringify(message);
    messagesSentElem.appendChild(pElem);
    messageField.value = "";
}, false);
