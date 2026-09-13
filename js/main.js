let trilho = document.getElementById("trilho");

trilho.addEventListener("click", () => {
  trilho.classList.toggle("light");
});

let listaNome = ["joao", "maria", "josé"];

let button = document.getElementById("button1");
button.addEventListener("mouseover", function () {
  alert(listaNome[1]);
});
