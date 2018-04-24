function getAngle() {
    var input = document.getElementById("time")
    var error = document.getElementById("error")
    var result = document.getElementById("result")
    var timeArr = input.value.split(":")
    error.innerHTML = result.innerHTML = ""
    if (input.value == "") {
        error.innerHTML = "Please enter some text in the input field"
    } else if (timeArr.length != 2) {
        error.innerHTML = "Please enter text in valid format. Valid Format - hh:mm"
    } else {
        var hrs = timeArr[0]
        var mins = timeArr[1]
        if (hrs > 12 || mins > 60 || hrs < 0 || mins < 0) {
            error.innerHTML = "Please enter time in valid limits. Valid limits for hh - 0 to 12 and limits for mm - 0 to 60"
        } else {
            var hrsA = hrs * 360 / 12
            var minsA = mins * 360 / 60
            hrsA += minsA/12
            var angle = Math.abs(hrsA - minsA)
            var reqAngle = (angle > 180) ? (360 - angle) : angle
            result.innerHTML = reqAngle + "<sup>o</sup>"
            setTime(hrsA, minsA)
        }
    }
}

function setTime(hrsA, minsA) {
    var minutes = document.getElementById("minutes")
    var hours = document.getElementById("hours")
    var date = new Date()
    var minsAngle = ((minsA == 0) ? 0 : minsA) || date.getMinutes() * 360 / 60
    var hrsAngle = hrsA || ((date.getHours() > 12) ? (date.getHours()-12) : date.getHours() ) * 360 / 12 + minsAngle/12
    hours.style.transform = "rotate(" + hrsAngle + "deg)"
    minutes.style.transform = "rotate(" + minsAngle + "deg)"
}
setTimeout(function() {
   setTime()
}, 20)

setInterval(function() {
    setTime()
}, 10000)