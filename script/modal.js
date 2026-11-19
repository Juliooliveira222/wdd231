const modal = document.querySelector("#inscricao");
const abrirModal = document.querySelector(".botao-abrir");
const fecharModal = document.querySelector(".botao-fechar");

abrirModal.addEventListener("click", () => {
  modal.showModal();
});

fecharModal.addEventListener("click", () => {
  modal.close();
});
