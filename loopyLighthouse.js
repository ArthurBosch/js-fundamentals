loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

function loopyLighthouse(range, multiples, words) {
  const [start, stop] = range;
  const [mul1, mul2] = multiples;
  const [wor1, wor2] = words;

  let i = start;
  while (i <= stop) {
    if (i % mul1 === 0 && i % mul2 === 0) {
      console.log(wor1 + wor2);
    } else if (i % mul1 === 0) {
      console.log(wor1);
    } else if (i % mul2 === 0) {
      console.log(wor2);
    } else {
      console.log(i);
    }

    i++;
  }
}
