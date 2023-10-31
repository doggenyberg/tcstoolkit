// -- Clock & weather widget -- //

// import HTML elements
const clock = document.getElementById("clock");
const day = document.getElementById("day");
const dateMonthYear = document.getElementById("dateMonthYear");
const temp = document.getElementById("temp");

// get weather status
updateWeather();

// function that updates the time & date every second
setInterval(() => {
    dates = getDates();
    clock.innerHTML = 
    ("0" + dates[5]).substr(-2) + ":" + ("0" + dates[4]).substr(-2);
    day.innerHTML = translateDay(dates[3]);
    dateMonthYear.innerHTML = `${dates[0]} ${convertMonth(dates[1])} ${dates[2]}`; 
}, 1000)

function getDates() {
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let da = d.getDay();
    let m = d.getMinutes();
    let h = d.getHours();
    let dates = [date, month, year, da, m, h];
    return dates;
}

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
        case 0:
            return "SÖNDAG";
    }
}

function convertMonth(month) {
    switch (month) {
        case 0:
            return "januari";
        case 1:
            return "februari";
        case 2:
            return "mars";
        case 3:
            return "april";
        case 4:
            return "maj";
        case 5:
            return "juni";
        case 6:
            return "juli";
        case 7:
            return "augusti";
        case 8:
            return "september";
        case 9:
            return "oktober";
        case 10:
            return "november";
        case 11:
            return "december";
    }
}


async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=59.40316&lon=17.94479&appid=6c54c157dd0a9f4ebb1b0909374b6133&units=metric`)
    const weather = await response.json();
    return weather;
} 

async function updateWeather() {
    const data = await getWeather();
    const dataTemp = data.main.temp;
    temp.innerHTML = `${Math.round(dataTemp)}°`;
}