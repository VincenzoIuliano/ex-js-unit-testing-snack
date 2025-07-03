
function getInitials(nomeCompleto) {
   const [nome, cognome] = nomeCompleto.split(" ").filter(string => string.trim() !== "");
   return nome.charAt(0).toUpperCase() + cognome.charAt(0).toUpperCase();
}

function createSlug(testo) {
   return testo.toLowerCase().replaceAll(" ", "-"); 
}

function average(numbers) {
    numbers.forEach(num => {
        if (typeof num !== 'number') {
            throw new Error('All elements must be numbers');
        }
    });
    return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
}
   
module.exports = { getInitials, createSlug, average };