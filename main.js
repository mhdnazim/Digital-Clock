

function clockTime() {

    let date = new Date()
    let am_pm = "AM"

    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;


    // clock.innerHTML=`${hour}:${minute}:${second}:${am_pm}`
    hours.innerHTML = `${hour}`
    minutes.innerHTML = `${minute}`
    seconds.innerHTML = `${second}`
    am.innerHTML = `${am_pm}`

    setTimeout(() => {
        clockTime()

    }, 1000);
}

clockTime()