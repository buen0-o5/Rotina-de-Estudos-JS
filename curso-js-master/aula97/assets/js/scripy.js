const inputNome = document.querySelector(".nome");
const btnCad = document.querySelector(".btn-cad");
const result = document.querySelector(".result");
const listaNome = [];

btnCad.addEventListener("click", (e) => {
  e.preventDefault();
  const nome = inputNome.value.trim();
  if (nome !== "") {
    listaNome.push(nome);
    const li = document.createElement("li");
    verifica(nome, li);
    li.textContent = nome;
    result.appendChild(li);
    inputNome.value = "";
  }
});

function verifica(nome, li) {
  if (nome.startsWith("Jo")) {
    li.style.fontWeight = "bold";
  }
}
