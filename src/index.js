function usaClock() {
  let laElement = document.querySelector("#los-angeles");
  if (laElement) {
    let laDate = laElement.querySelector(".date");
    let laTime = laElement.querySelector(".time");
    let laMoment = moment().tz("America/Los_Angeles");

    laDate.innerHTML = laMoment.format("ddd, MMMM D, YYYY");
    laTime.innerHTML = laMoment.format("h:mm:ss [<small>]A[<small>]");
  }

  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDate = chicagoElement.querySelector(".date");
    let chicagoTime = chicagoElement.querySelector(".time");
    let chicagoMoment = moment().tz("America/Chicago");

    chicagoDate.innerHTML = chicagoMoment.format("ddd, MMMM D, YYYY");
    chicagoTime.innerHTML = chicagoMoment.format("h:mm:ss [<small>]A[<small>]");
  }

  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDate = newYorkElement.querySelector(".date");
    let newYorkTime = newYorkElement.querySelector(".time");
    let newYorkMoment = moment().tz("America/New_York");

    newYorkDate.innerHTML = newYorkMoment.format("ddd, MMMM D, YYYY");
    newYorkTime.innerHTML = newYorkMoment.format("h:mm:ss [<small>]A[<small>]");
  }
}
function changeCity(event) {
  let timezone = event.target.value;
  let name = timezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(timezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
        <div>
            <h2>${name} </h2>
        </div>
        <div>    
            <div class="date">${cityTime.format("ddd, MMMM, D, YYYY")}</div>
            <div class="time">${cityTime.format("h:mm:ss [<small>]A[<small>]")}
        </div>
        
        <a href="/">Back to US Timezones</a>
        
    </div></div>`;
}

usaClock();
setInterval(usaClock, 1000);

let worldCitiesElement = document.querySelector("#worldCities");
worldCitiesElement.addEventListener("change", changeCity);
