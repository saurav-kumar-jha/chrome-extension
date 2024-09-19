var Time = document.getElementById("time")
setInterval(() => {
    var DATE = new Date()
    Time.innerHTML = `${DATE.getHours()}:${DATE.getMinutes()}:${DATE.getSeconds()}`
}, 1000);