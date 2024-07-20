 $(document).ready(function () {
    var divTitle = $('.modal-title');

    var modalBody = $('.modal-body');
    
    console.log('2');
    $('#divMentoriaIndividual').click(function () {
        divTitle.html("<strong>Mentoria Individual</strong>");

        var conteudo = "<h3><strong>Programa de Treinamento de Inteligência Emocional</strong></h3>";
        conteudo += "<p>Com aplicação de testes e sessões semanais, mergulhamos na sua personalidade, com isso, traçamos pontos evolutivos da sua";
        conteudo += "inteligência emocional e buscamos desenvolver suas questões individuais.</p>";

        conteudo += "<p>O programa se realiza uma vez por semana, durante dez semanas.</p>";
        conteudo += "<p>Os atendimentos são individuais e acompanham um relatório documental dos exercícios realizados.</p>";

        conteudo += "<h3><strong>Para quem se aplica</strong></h3>";
        conteudo += "<p>Todos que buscam o desenvolvimento pessoal, emocional ou profissional.</p>";

        conteudo += "<ul>";
        conteudo += "<li><strong>Período: </strong>10 sessões</li>";
        conteudo += "<li><strong>Valor: </strong>R$5.000,00</li>";
        conteudo += "<li><strong>Forma de pagamento: </strong>50% ato - 25% na 5ª sessão - 25% na 10ª sessão</li><strong>(Pagamento em boleto bancário ou transferência)</strong>";
        conteudo += "</ul>";

        modalBody.html(conteudo);
        
        $("#modal-mensagem").modal();
    });

    $('#divMentoriaCasal').click(function () {
        divTitle.html("<strong>Mentoria para Casal</strong>");
        
        var conteudo = "<h3><strong>Programa de Conexão do Afetivo</strong></h3>";
        conteudo += "<p>Com aplicação de testes mergulhamos nas personalidades de cada um, traçamos pontos evolutivos, ";
        conteudo += "treinando comunicação e comportamento, buscando reaproximar o casal, realinhar objetivos, trabalhar o equilíbrio e a harmonização afetiva.</p>";

        conteudo += "<h3><strong>Para quem se aplica</strong></h3>";
        conteudo += "<p>Casais.</p>";

        conteudo += "<ul>";
        conteudo += "<li><strong>Período: </strong>4 sessões individuais (2 sessões com cada um) + 6 sessões em conjunto</li>";
        conteudo += "<li><strong>Valor: </strong>R$8.500,00</li>";
        conteudo += "<li><strong>Forma de pagamento: </strong>50% ato - 25% na 5ª sessão - 25% na 10ª sessão</li><strong>(Pagamento em boleto bancário ou transferência)</strong>";
        conteudo += "</ul>";

        modalBody.html(conteudo);
        
        $("#modal-mensagem").modal();
    });

    $('#divMentoriaCorporativa').click(function () {
        divTitle.html("<strong>Mentoria para Liderança</strong>");
        
        var conteudo = "<h3><strong>Programa de Reconhecimento e Estado de Performance</strong></h3>";
        conteudo += "<p>Realizamos uma imersão na empresa para mapeamento dos colaboradores e da performance dos resultados de diferentes ";
        conteudo += "departamentos. Alinhamos a expectativa de trabalho e entrega, e fazemos o levantamento dos pontos falhos e métrica de solução para evolução e atingimento de objetivos.</p>";

        conteudo += "<h3><strong>Para quem se aplica</strong></h3>";
        conteudo += "<p>empresas de diferentes portes, diretores, decisores, equipe operacional.</p>";

        conteudo += "<ul>";
        conteudo += "<li><strong>Período: </strong>10 sessões</li>";
        conteudo += "<li><strong>Valor: </strong>R$20.000,00</li>";
        conteudo += "<li><strong>Forma de pagamento: </strong>50% ato - 25% na 5ª sessão - 25% na 10ª sessão</li><strong>(Pagamento em boleto bancário ou transferência)</strong>";
        conteudo += "</ul>";

        modalBody.html(conteudo);
        
        $("#modal-mensagem").modal();
    });
});

  