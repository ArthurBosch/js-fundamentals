console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-5, 2, -3));

function range(start, stop, step) {
  if (
    stop < start ||
    step <= 0 ||
    typeof start === undefined ||
    typeof stop === undefined ||
    typeof step === undefined
  ) {
    return [];
  }

  let result = [];
  let index = start;

  while (index <= stop) {
    result.push(index);
    index = index + step;
  }
  return result;
}
