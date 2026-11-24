function ehPalindromo(texto) {
  const normalizado = texto.toLowerCase();
  const invertido = normalizado.split("").reverse().join("");
  return normalizado === invertido;
}
