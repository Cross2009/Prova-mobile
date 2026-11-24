function contarVogais(texto) {
  const vogais = "aeiou";
  let contador = 0;

  for (const caractere of texto.toLowerCase()) {
    if (vogais.includes(caractere)) {
      contador++;
    }
  }

  return contador;
}
