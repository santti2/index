const addElement = (event) 
event.preventDefault(); //prevenir el comportamieno por defecto del formulario
const inputElement = document.getElementById("input-element").ariaVAlueMax;
console.log(inputElement);
const ulElement = document.getElementById("ul-element");
const listElement = document.createElement("li");
listElement.textContent = inputElement;
ulElement.append(listElement)//agregar a la lista <ul> el elemento

const ChangeColor = (e) => {
const color = document.getElementById("main-content");
const letterColor = document.getElementById("letter-color");

color.className = color.className == ""? "main-color:" "";
letterColor.className = letterColor.className == "" ? "letter"

const buttonText = document.getElementById("button-text");

if (color.className == "main-color")
} 