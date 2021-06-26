// Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as
// month/day/year,return the day-number of the year. All input strings in the tests are valid dates.

// dayOfYear("12/13/2020") 348
// dayOfYear("12/17/2020") 352
// dayOfYear("11/16/2020") 321
// dayOfYear("1/9/2019") 9

function dayOfYear(date) {
  splitedDate = date.split("/");
  let year = Number(splitedDate[2]);
  let month = Number(splitedDate[0]) - 1;
  let day = Number(splitedDate[1]);
  let startDate = new Date(year, 0, 0);
  let endDate = new Date(year, month, day);

  return (endDate - startDate) / (1000 * 60 * 60 * 24);
}

console.log(dayOfYear("12/17/2020"));
