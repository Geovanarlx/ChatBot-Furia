function sendMessage() {
    const input = document.getElementById('userInput');
    const chat = document.getElementById('chat');
    const userText = input.value.trim();
    if (userText === "") return;
  
    
    chat.innerHTML += `<p><strong>Você:</strong> ${userText}</p>`;
  
  
    let response = "Não entendi. Pode perguntar outra coisa?";
    if (userText.toLowerCase().includes("jogadores")) {
      response = "Os jogadores da FURIA são: KSCERATO, yuurih, MOLODOY, YEKINDAR e FalleN.";
    } else if (userText.toLowerCase().includes("próximo jogo")) {
      response = "O próximo jogo ainda não foi definido. Fique ligado nas redes sociais da FURIA para mais informações!";
    } else if (userText.toLowerCase().includes("camisas") || userText.toLowerCase().includes("loja")) {
      response = "Você pode comprar as camisas e outros produtos da FURIA na loja oficial da organização. Acesse o site furia.gg e confira as novidades!";
    } else if (userText.toLowerCase().includes("campeonato") || userText.toLowerCase().includes("competição")) {
        response = "O próximo campionato que o time da FURIA irá participar será o PGL Astana 2025. Fique ligado nas redes sociais da FURIA para mais informações!";
    } else if (userText.toLowerCase().includes("assistir") || userText.toLowerCase().includes("transmissão")) {
        response = "Você pode assistir os jogos da FURIA na Twitch e no YouTube. Você também pode acompanhar as redes sociais da FURIA para mais informações sobre os jogos!";
    } else if (userText.toLowerCase().includes("furia") || userText.toLowerCase().includes("organização") || userText.toLowerCase().includes("equipe")) {
        response = "A Organização FURIA é uma equipe de esports brasileira, fundada em 2017. A FURIA é conhecida por sua equipe de CS:GO e Valorant, e tem se destacado em várias competições internacionais. Também é conhecida por seu conteúdo de entretenimento e por sua presença nas redes sociais. E é uma das organizações mais populares do Brasil e tem uma base de fãs dedicada. FIQUE LIGADO NAS REDES SOCIAIS DA FURIA PARA MAIS INFORMAÇÕES OU ACOMPANHE O SITE OFICIAL DA FURIA: furia.gg";
    } else if (userText.toLowerCase().includes("redes sociais") || userText.toLowerCase().includes("instagram") || userText.toLowerCase().includes("twitter") || userText.toLowerCase().includes("facebook")) {
        response = "Você pode acompanhar as redes sociais da FURIA no Instagram, Twitter e Facebook. Você também pode acompanhar o site oficial da FURIA para mais informações: furia.gg";
    } else if (userText.toLowerCase().includes("geovana")) {
      response = "Vocês deveriam me contratar (Geovana) porque além de ser uma grande fã da organização, eu também busco sempre dar o meu melhor em tudo que vou fazer. Talvez eu não tenha tanta experiência, mas estarei sempre em busca de aprender e melhorar. E essa vaga além de uma grande oportunidade de crescimento profissional, também seria uma realização pessoal. E eu sou uma grande fã da FURIA e adoraria fazer parte desse TIME incrível!";
    }
    

    chat.innerHTML += `<p><strong>FURIA Bot:</strong> ${response}</p>`;
    chat.scrollTop = chat.scrollHeight;
    input.value = "";
  }
  