function add(...numbers: number[]) {
  let sum = 0;

  for (const n of numbers) {
    sum += n;
  }

  return sum;
}

// eslint-disable-next-line no-console
console.log(add(1, 2, 3, 4));
