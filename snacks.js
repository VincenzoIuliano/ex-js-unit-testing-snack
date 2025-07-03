function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto
    .split(" ")
    .filter((string) => string.trim() !== "");
  return nome.charAt(0).toUpperCase() + cognome.charAt(0).toUpperCase();
}

function createSlug(testo) {
  if (!testo) {
    throw new Error("Titolo non valido");
  }
  return testo.toLowerCase().replaceAll(" ", "-");
}

function average(numbers) {
  numbers.forEach((num) => {
    if (typeof num !== "number") {
      throw new Error("All elements must be numbers");
    }
  });
  return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
}

function isPalindrome(word) {
  const wordReversed = word.trim().split("").reverse().join("");
  return wordReversed === word.trim();
}

module.exports = { getInitials, createSlug, average, isPalindrome };
