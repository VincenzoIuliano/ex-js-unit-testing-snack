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

function findPostById(posts, id) {
    if (isNaN(id)) {
        throw new Error(`${id} is not a valid id`);
    }
    posts.forEach((post) => {
        if (
            post.id === undefined ||
            post.title === undefined ||
            post.slug === undefined
        ) {
            throw new Error(`Invalid post id in posts array`);
        }
    });
    return posts.find((post) => post.id === id) || null;
}

module.exports = { getInitials, createSlug, average, isPalindrome, findPostById };
