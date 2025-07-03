const { getInitials, createSlug } = require('./snacks');

// Snack 1 

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Mario Rossi")).toBe("MR");
});

// Snack 2

test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Hello World")).toBe("hello world");
});