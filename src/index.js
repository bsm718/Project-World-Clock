function usaClock() {
  let laElement = document.querySelector("#los-angeles");
  if (laElement) {
    let laDate = laElement.querySelector(".date");
    let laTime = laElement.querySelector(".time");
    let laMoment = moment().tz("America/Los_Angeles");

    laDate.innerHTML = laMoment.format("ddd, MMMM D, YYYY");
    laTime.innerHTML = laMoment.format("h:mm:ss [<small>] A[<small>]");
  }

  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDate = chicagoElement.querySelector(".date");
    let chicagoTime = chicagoElement.querySelector(".time");
    let chicagoMoment = moment().tz("America/Chicago");

    chicagoDate.innerHTML = chicagoMoment.format("ddd, MMMM D, YYYY");
    chicagoTime.innerHTML = chicagoMoment.format(
      "h:mm:ss [<small>] A[<small>]"
    );
  }

  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDate = newYorkElement.querySelector(".date");
    let newYorkTime = newYorkElement.querySelector(".time");
    let newYorkMoment = moment().tz("America/New_York");

    newYorkDate.innerHTML = newYorkMoment.format("ddd, MMMM D, YYYY");
    newYorkTime.innerHTML = newYorkMoment.format(
      "h:mm:ss [<small>] A[<small>]"
    );
  }
}

function changeCity(event) {
  let timezone = event.target.value;
  let country = document.querySelector(".country");
  let flag = document.querySelector(".flag");

  if (timezone === "currentLocation") {
    timezone = moment.tz.guess();
    country = "";
    GMT = `GMT${moment().tz(timezone).format("Z")}`;
    flag = "📍";
  }
  if (timezone === "America/Caracas") {
    country = "VE";
    GMT = `GMT${moment().tz(timezone).format("Z")}`;
    flag = "🇻🇪";
  }
  if (timezone === "Europe/London") {
    country = "UK";
    GMT = `GMT${moment().tz(timezone).format("Z")}`;
    flag = "🇬🇧";
  }
  if (timezone === "Africa/Nairobi") {
    country = "KE";
    GMT = `GMT${moment().tz(timezone).format("Z")}`;
    flag = "🇰🇪";
  }
  if (timezone === "Asia/Bangkok") {
    country = "TH";
    GMT = `GMT${moment().tz(timezone).format("Z")}`;
    flag = "🇹🇭";
  }

  let name = timezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(timezone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city">

            <div>
              <div>
               <span class="flag">${flag}</span><span class="GMT">${GMT}</span>
              </div>

              <div class="worldDate">${cityTime.format(
                "dddd, MMMM D, YYYY"
              )}</div>

            <div>
              <span class="name">${name} </span><span class="country">${country}</span>
            </div>
       </div>
       <div>
            <div class="worldTime">${cityTime.format(
              "h:mm:ss"
            )}<small> ${cityTime.format("A")} <small>
            </div></div></div>

            
        <a href="/" class="backToHomepage">Back to US Timezones</a></div>`;
}

usaClock();
setInterval(usaClock, 1000);

let citiesElement = document.querySelector("#worldCities");
citiesElement.addEventListener("change", changeCity);
