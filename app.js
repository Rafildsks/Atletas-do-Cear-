function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(campoPesquisa)

    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricão = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLocaleLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      // se titulo includes campoPesquisa
          if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            //cria um novo elemento
            resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricão-meta">${dado.descricão}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  } 

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
  }
    // Atualiza o conteúdo HTML da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }