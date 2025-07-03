const { getInitials, createSlug, average, isPalindrome } = require('./snacks');

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