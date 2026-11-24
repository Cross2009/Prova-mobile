function ehPrimo(num) {
  if (num < 2) {
    return false;
  }

  for (let divisor = 2; divisor * divisor <= num; divisor++) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
}

function contarPrimos(n) {
  let quantidade = 0;

  for (let i = 2; i <= n; i++) {
    if (ehPrimo(i)) {
      quantidade++;
    }
  }

  return quantidade;
}
