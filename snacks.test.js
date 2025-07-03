const { getInitials, createSlug, average } = require('./snacks');

// Snack 1 

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Mario Rossi")).toBe("MR");
});

// Snack 2

test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Hello World")).toBe("hello world");
});

// Snack 3

test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3); 
});