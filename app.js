
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

/**
 * This function returns the index of the closest time in comparison with the
 * times provided by the listOfDates parameter
 * @param {Array.<string>} listOfDates - Contains the date and time in ISO standard as a string, this
 * value comes from the weather API, data.hourly.time.
 * @param {Date} date - A date time object. - Default current UTC time now.
*/
function findClosestDate (listOfDates, date= new Date()) {

  // date gives the UTC time, it needs to be converted to local time on IsoDateTime
  // by subtracting the timezone difference
  let isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
  
  // convert date object ISO standard to string
  let isoDateString = isoDateTime.toISOString();
  
  //the converted time string 
  let isoDate = isoDateString.split(':')[0]

  // This is the index that is going to be used to match the temperature
  let indexOfList;
  for(let i =0; i < listOfDates.length -1; i++){
    
    if(isoDate === listOfDates[i].split(":")[0]){
      indexOfList = i
    }
  }

  return indexOfList

}



function getWeather(latitude, longitude) {
  let apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,rain,showers,snowfall,snow_depth,weathercode,cloudcover,visibility,windspeed_10m,winddirection_10m&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=America%2FNew_York`
  // fetch(apiUrl)
  // .then((response) => response.json())
  // .then((data) => {
    
  // let dataTime = data.hourly.time
  //   //console.log(dataTime)

  // });
  let timeArray = [
    "2023-03-18T00:00",
    "2023-03-18T01:00",
    "2023-03-18T02:00",
    "2023-03-18T03:00",
    "2023-03-18T04:00",
    "2023-03-18T05:00",
    "2023-03-18T06:00",
    "2023-03-18T07:00",
    "2023-03-18T08:00",
    "2023-03-18T09:00",
    "2023-03-18T10:00",
    "2023-03-18T11:00",
    "2023-03-18T12:00",
    "2023-03-18T13:00",
    "2023-03-18T14:00",
    "2023-03-18T15:00",
    "2023-03-18T16:00",
    "2023-03-18T17:00",
    "2023-03-18T18:00",
    "2023-03-18T19:00",
    "2023-03-18T20:00",
    "2023-03-18T21:00",
    "2023-03-18T22:00",
    "2023-03-18T23:00",
    "2023-03-19T00:00",
    "2023-03-19T01:00",
    "2023-03-19T02:00",
    "2023-03-19T03:00",
    "2023-03-19T04:00",
    "2023-03-19T05:00",
    "2023-03-19T06:00",
    "2023-03-19T07:00",
    "2023-03-19T08:00",
    "2023-03-19T09:00",
    "2023-03-19T10:00",
    "2023-03-19T11:00",
    "2023-03-19T12:00",
    "2023-03-19T13:00",
    "2023-03-19T14:00",
    "2023-03-19T15:00",
    "2023-03-19T16:00",
    "2023-03-19T17:00",
    "2023-03-19T18:00",
    "2023-03-19T19:00",
    "2023-03-19T20:00",
    "2023-03-19T21:00",
    "2023-03-19T22:00",
    "2023-03-19T23:00",
    "2023-03-20T00:00",
    "2023-03-20T01:00",
    "2023-03-20T02:00",
    "2023-03-20T03:00",
    "2023-03-20T04:00",
    "2023-03-20T05:00",
    "2023-03-20T06:00",
    "2023-03-20T07:00",
    "2023-03-20T08:00",
    "2023-03-20T09:00",
    "2023-03-20T10:00",
    "2023-03-20T11:00",
    "2023-03-20T12:00",
    "2023-03-20T13:00",
    "2023-03-20T14:00",
    "2023-03-20T15:00",
    "2023-03-20T16:00",
    "2023-03-20T17:00",
    "2023-03-20T18:00",
    "2023-03-20T19:00",
    "2023-03-20T20:00",
    "2023-03-20T21:00",
    "2023-03-20T22:00",
    "2023-03-20T23:00",
    "2023-03-21T00:00",
    "2023-03-21T01:00",
    "2023-03-21T02:00",
    "2023-03-21T03:00",
    "2023-03-21T04:00",
    "2023-03-21T05:00",
    "2023-03-21T06:00",
    "2023-03-21T07:00",
    "2023-03-21T08:00",
    "2023-03-21T09:00",
    "2023-03-21T10:00",
    "2023-03-21T11:00",
    "2023-03-21T12:00",
    "2023-03-21T13:00",
    "2023-03-21T14:00",
    "2023-03-21T15:00",
    "2023-03-21T16:00",
    "2023-03-21T17:00",
    "2023-03-21T18:00",
    "2023-03-21T19:00",
    "2023-03-21T20:00",
    "2023-03-21T21:00",
    "2023-03-21T22:00",
    "2023-03-21T23:00",
    "2023-03-22T00:00",
    "2023-03-22T01:00",
    "2023-03-22T02:00",
    "2023-03-22T03:00",
    "2023-03-22T04:00",
    "2023-03-22T05:00",
    "2023-03-22T06:00",
    "2023-03-22T07:00",
    "2023-03-22T08:00",
    "2023-03-22T09:00",
    "2023-03-22T10:00",
    "2023-03-22T11:00",
    "2023-03-22T12:00",
    "2023-03-22T13:00",
    "2023-03-22T14:00",
    "2023-03-22T15:00",
    "2023-03-22T16:00",
    "2023-03-22T17:00",
    "2023-03-22T18:00",
    "2023-03-22T19:00",
    "2023-03-22T20:00",
    "2023-03-22T21:00",
    "2023-03-22T22:00",
    "2023-03-22T23:00",
    "2023-03-23T00:00",
    "2023-03-23T01:00",
    "2023-03-23T02:00",
    "2023-03-23T03:00",
    "2023-03-23T04:00",
    "2023-03-23T05:00",
    "2023-03-23T06:00",
    "2023-03-23T07:00",
    "2023-03-23T08:00",
    "2023-03-23T09:00",
    "2023-03-23T10:00",
    "2023-03-23T11:00",
    "2023-03-23T12:00",
    "2023-03-23T13:00",
    "2023-03-23T14:00",
    "2023-03-23T15:00",
    "2023-03-23T16:00",
    "2023-03-23T17:00",
    "2023-03-23T18:00",
    "2023-03-23T19:00",
    "2023-03-23T20:00",
    "2023-03-23T21:00",
    "2023-03-23T22:00",
    "2023-03-23T23:00",
    "2023-03-24T00:00",
    "2023-03-24T01:00",
    "2023-03-24T02:00",
    "2023-03-24T03:00",
    "2023-03-24T04:00",
    "2023-03-24T05:00",
    "2023-03-24T06:00",
    "2023-03-24T07:00",
    "2023-03-24T08:00",
    "2023-03-24T09:00",
    "2023-03-24T10:00",
    "2023-03-24T11:00",
    "2023-03-24T12:00",
    "2023-03-24T13:00",
    "2023-03-24T14:00",
    "2023-03-24T15:00",
    "2023-03-24T16:00",
    "2023-03-24T17:00",
    "2023-03-24T18:00",
    "2023-03-24T19:00",
    "2023-03-24T20:00",
    "2023-03-24T21:00",
    "2023-03-24T22:00",
    "2023-03-24T23:00"
    ]
  
  findClosestDate(timeArray)
  //findClosestDate(dataTime)
 //console.log(apiUrl)
}



function showPosition(position) {
  getWeather(position.coords.latitude, position.coords.longitude)
}



  


