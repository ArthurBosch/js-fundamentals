console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));

function smartGarbage(trash, bins) {
  if (!typeof trash === String) return undefined;
  const result = bins;
  result[trash] = result[trash] + 1;
  return result;
}
