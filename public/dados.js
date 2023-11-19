

fetch('/dados')
  .then(response => response.json())
  .then(jogadores => {
    // Aqui você tem os dados dos jogadores e pode usá-los para atualizar o HTML
    // Por exemplo, se você quiser adicionar os nomes dos jogadores a uma tabela:
    const tabela = document.getElementById('tabela-jogadores');
    jogadores.forEach(jogador => {
        //criação dos elementos da tabela e armazenando em variaveis
      const linha = document.createElement('tr');
      const celulaNome = document.createElement('td');
      const celulaScore = document.createElement('td');
      //pegando os valores de nome e score e inserindo nos campos td da tabela
      celulaNome.textContent = jogador.nome;
      celulaScore.textContent = jogador.score;
      linha.appendChild(celulaNome);
      linha.appendChild(celulaScore);
      tabela.appendChild(linha);
    });
  });