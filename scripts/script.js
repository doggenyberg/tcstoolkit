// -- Clock & weather widget -- //

// import HTML elements
const clock = document.getElementById("clock");
const day = document.getElementById("day");

// function that updates the time every second
setInterval(() => {
    let d = new Date();
    let da = d.getDay();
    let m = d.getMinutes();
    let h = d.getHours();
    clock.innerHTML = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2);
    day.innerHTML = translateDay(da);
    
}, 1000)

function translateDay(day) {
    switch (day) {
        case 1:
            return "MÅNDAG";
        case 2:
            return "TISDAG";
        case 3:
            return "ONSDAG";
        case 4:
            return "TORSDAG";
        case 5:
            return "FREDAG";
        case 6:
            return "LÖRDAG";
        case 7:
            return "SÖNDAG";
    }
}