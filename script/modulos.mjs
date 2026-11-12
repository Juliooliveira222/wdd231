const cursoBYUI = {
  codigo: "WDD231",
  nome: "Desenvolvimento Frontend para Web I",
  secoes: [
    {
      numeroSecao: 1,
      matriculados: 88,
      instrutor: "Irmão Silva",
    },
    {
      numeroSecao: 2,
      matriculados: 81,
      instrutor: "Irmã Pinheiro",
    },
    {
      numeroSecao: 3,
      matriculados: 95,
      instrutor: "Irmã Oliveira",
    },
  ],
  mudarMatriculas: function (numeroSecao, add = true) {
    
    const indiceSecao = this.secoes.findIndex(
      (secao) => secao.numeroSecao == numeroSecao
    );
    if (indiceSecao >= 0) {
      if (add) {
        this.secoes[indiceSecao].matriculados++;
      } else {
        this.secoes[indiceSecao].matriculados--;
      }
      renderizarSecoes(this.secoes);
    }
  },
};

function definirSecaoSelecionada() {
  const elementoSelect = document.querySelector("#numeroSecao");
  cursoBYUI.secoes.forEach((secao) => {
    const option = document.createElement("option");
    option.value = secao.numeroSecao;
    option.textContent = `${secao.numeroSecao}`;
    elementoSelect.appendChild(option);
  });
}

function definirTitulo(curso) {
  document.querySelector("#nomeCurso").textContent = curso.nome;
  document.querySelector("#codigoCurso").textContent = curso.codigo;
}

function renderizarSecoes(secoes) {
  const html = secoes.map(
    (secao) => `<tr>
    <td>${secao.numeroSecao}</td>
    <td>${secao.matriculados}</td>
    <td>${secao.instrutor}</td></tr>`
  );
  document.querySelector("#secoes").innerHTML = html.join("");
}

document.querySelector("#matricularEstudante").addEventListener("click", function () {
  const numeroSecao = Number(document.querySelector("#numeroSecao").value);
  cursoBYUI.mudarMatriculas(numeroSecao);
});
document.querySelector("#removerEstudante").addEventListener("click", function () {
  const numeroSecao = Number(document.querySelector("#numeroSecao").value);
  cursoBYUI.mudarMatriculas(numeroSecao, false);
});

definirTitulo(cursoBYUI);
definirSecaoSelecionada(cursoBYUI.secoes);
renderizarSecoes(cursoBYUI.secoes);