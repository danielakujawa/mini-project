function puntaje(num) {
  return num * 20 + "px";
}

function porcentaje(num) {
  return num * 10 + "%";
}

var btn = document.querySelector("button");
var contador = 0;
var suma = 0;
var promedio = 0;

btn.addEventListener("click", function() {
  var input = document.querySelector("input").value;

  var animated = document.querySelector(".animated-bar");

  contador++;
  suma += Number(input);

  promedio = suma / contador;
  animated.style.width = puntaje(promedio);

  texto.innerText = porcentaje(promedio);
});

var texto = document.createElement("p");
document.querySelector(".container").appendChild(texto);
