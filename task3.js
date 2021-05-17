// The input is object, which keys are student's names and values are array of their scores. Find the
// student with the best average score.

function getBestStudent(obj) {
  let newObj = {};
  for (const item in obj) {
    avg = obj[item].reduce((a, b) => {
      return a + b;
    });
    avg = avg / obj[item].length;
    newObj[item] = avg;
  }
  let result = Object.keys(newObj).reduce((a, b) =>
    newObj[a] > newObj[b] ? a : b
  );
  console.log(result);
}

getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80],
});

// OUTPUT => "John"
// John's avg = 90
// Bob's avg = 83.33
