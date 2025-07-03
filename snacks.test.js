const { getInitials, createSlug, average, isPalindrome, findPostById } = require('./snacks');

// Snack 1 

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Mario Rossi")).toBe("MR");
});

// Snack 2

test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Hello World")).toBe("hello-world");
});

// Snack 3

test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3); 
});

// Snack 4

test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug("Hello World")).toBe("hello-world");
});

// Snack 5

test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome("radar")).toBeTruthy();
    expect(isPalindrome("hello")).toBeFalsy();
});

// Snack 6
test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug("")).toThrow('Titolo non valido');
    expect(() => createSlug(null)).toThrow('Titolo non valido');
});

// Snack 7

const posts = [
    { id: 1, title: "Il simbolo perduto", slug: "il-simbolo-perduto" },
    { id: 2, title: "La prima indagine di Momtalbano", slug: "la-prima-indagine-di-montalbano" },
    { id: 3, title: "Il primo dei templari", slug: "il-primo-dei-templari" },
]

test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id.', () => {
    expect(findPostById(posts, 1)).toEqual({ id: 1, title: "Il simbolo perduto", slug: "il-simbolo-perduto" });
    expect(findPostById(posts, "ciao")).toThrow('ciao is not a valid id');
    expect(findPostById([1,2,3,4,5], 4)).toThrow("L'array deve contenere oggetti con una proprietà id");
});