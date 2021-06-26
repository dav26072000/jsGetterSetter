// Implement following function

// const formatDate = (date) => {
// return date;
// };

// console.log("Actual output: ", formatDate(new Date("2020-05-14")));
// console.log("Expected output", "14 May 2020");

newDate = new Date("2020-05-14");

function formatDate(date) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} `;
}

console.log(formatDate(newDate));
