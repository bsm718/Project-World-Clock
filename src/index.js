function usaClock() {
  let laElement = document.querySelector("#los-angeles");

  let laDate = laElement.querySelector(".date");
  let laTime = laElement.querySelector(".time");
  let laMoment = moment().tz("America/Los_Angeles");

  laDate.innerHTML = laMoment.format("dddd, MMMM D, YYYY");
  laTime.innerHTML = laMoment.format("h:mm:ss [<small>]A[<small>]");

  let chicagoElement = document.querySelector("#chicago");

  let chicagoDate = chicagoElement.querySelector(".date");
  let chicagoTime = chicagoElement.querySelector(".time");
  let chicagoMoment = moment().tz("America/Chicago");

  chicagoDate.innerHTML = chicagoMoment.format("dddd, MMMM D, YYYY");
  chicagoTime.innerHTML = chicagoMoment.format("h:mm:ss [<small>]A[<small>]");

  let newYorkElement = document.querySelector("#new-york");

  let newYorkDate = newYorkElement.querySelector(".date");
  let newYorkTime = newYorkElement.querySelector(".time");
  let newYorkMoment = moment().tz("America/New_York");

  newYorkDate.innerHTML = newYorkMoment.format("dddd, MMMM D, YYYY");
  newYorkTime.innerHTML = newYorkMoment.format("h:mm:ss [<small>]A[<small>]");
}

usaClock();
setInterval(usaClock, 1000);
