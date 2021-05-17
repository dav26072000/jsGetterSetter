// The function should produce the same output even if dateStart is greaterthan dateEnd

let january = new Date(2017, 0, 1);
let march = new Date(2016, 0, 1);

const monthNames = [
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

function monthsInterval(fDate, sDate) {
  let newArr = [];
  let containMounts = sDate.getMonth() - fDate.getMonth();
  let containYear = sDate.getFullYear() - fDate.getFullYear();
  if (containMounts >= 0 && containYear >= 0) {
    let plusYear = containYear * 12;
    for (let i = fDate.getMonth(); i < containMounts + 1 + plusYear; i++) {
      newArr.push(monthNames[i % 12]);
    }
  } else {
    return 0;
  }
  return newArr;
}

console.log(monthsInterval(january, march));

// ['January', 'February', March']
