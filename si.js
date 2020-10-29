console.log("No hay nada que ver acá.");
var pregunta = prompt("Ahora te voy a mostrar unas cosas y vos tenés que poner lo que te pida, entendiste (escribir sis o non)?");
if (pregunta == "non") {
  alert("Bue, igual, llena este formulario:");
}
var nombre = prompt("Nombre:");
var edad = prompt("Edad:");
var sexo = prompt("Sexo:");
var comentario = prompt("Algún comentario extra?");
document.write("Nombre: " + nombre + "<br/>");
document.write("Edad: " + edad + "<br/>");
document.write("Sexo: " + sexo + "<br/><br/>");
document.write('"' + comentario + '"');
