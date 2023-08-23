let palabras =["hola", "tres", "uno", "Universidad", "de", "Buenos Aires", "pepito", "celular"]
let word = "pepito";

function buscaPalabras(words, word){
    const indice = words.indexOf(word);
    console.log(indice);
    const palabras = words.filter(function (word) {
        return word.length > indice;
    });
    return palabras
}
console.log(buscaPalabras(palabras, word))