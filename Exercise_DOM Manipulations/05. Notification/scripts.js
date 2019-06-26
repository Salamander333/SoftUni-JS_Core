function notify(message) {
    let notification = document.getElementById("notification");
    notification.style.display = "block";
    notification.textContent = message;
    setTimeout(() => notification.style.display = "none" , 2000);
}