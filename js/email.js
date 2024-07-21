document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coletar os dados do formulário
    var name = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('mensagem').value;
    var telefone = document.getElementById('telefone').value;
    var profissao = document.getElementById('profissao').value;

    var mensagem = 'Nome: ' + name + '\n';
        mensagem += 'E-mail: ' + email + '\n';
        mensagem += 'Telefone: ' + telefone + '\n';
        mensagem += 'Profissão: ' + profissao + '\n';
        mensagem += 'Mensagem: ' + message + '\n';

    console.log('mensagem: ', mensagem);
    // Definir os parâmetros do template de e-mail
    var templateParams = {
        name: name,
        message: message
    };

    var service_id = 'service_8chfn3t';
    var template_id = 'template_4i2vrwc';

    // Enviar o e-mail usando EmailJS
    emailjs.send(service_id, template_id, templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email enviado com sucesso!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Erro ao enviar o email.');
        });
});
