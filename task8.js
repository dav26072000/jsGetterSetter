// const getWeekOfMonth = () => {};
// const result = getWeekOfMonth(new Date(2017, 10, 9));

const getWeekOfMonth = (date) => {
  let day = date.getDate();
  let mn = day % 7;
  let result = (day - mn) / 7 + 1;
  return result;
};
