// Write a function that, given a date (in the format MM/DD/YYYY),returns the day of the week as a string.
// Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday",
// "Thursday", "Friday", or "Saturday".

// getDay("12/07/2016") "Wednesday"
// getDay("09/04/2016") "Sunday"
// getDay("12/08/2011") "Thursday"

function getDay(date) {
  splitedDate = date.split("/");
  let year = Number(splitedDate[2]);
  let month = Number(splitedDate[0]) - 1;
  let day = Number(splitedDate[1]);
  let endDate = new Date(year, month, day);
  daysInWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysInWeek[endDate.getDay()];
}

console.log(getDay("12/07/2016"));
