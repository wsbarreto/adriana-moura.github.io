$.getJSON('https://wsbarreto.github.io/adriana-moura.github.io/appsettings.json', function(data) {
    console.log('data: ', data); // Acessa o conteúdo do arquivo JSON

    // code fragment
    // the form id is myForm
    $('form-contato').on('submit', function(event) {
        event.preventDefault(); // prevent reload
        
        var formData = new FormData(this);
        formData.append('service_id', data.SERVICE_ID);
        formData.append('template_id', data.TEMPLATE_ID);
        formData.append('user_id', data.PUBLICK_KEY);
    
        console.log('formData: ', formData);

        $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
            type: 'POST',
            data: formData,
            contentType: false, // auto-detection
            processData: false // no need to parse formData to string
        }).done(function() {
            alert('Your mail is sent!');
        }).fail(function(error) {
            console.error('Oops... ', error);
        });
    });
}).fail(function(jqXHR, textStatus, errorThrown) {
    console.error('Erro ao carregar o arquivo JSON: ', textStatus, errorThrown);
});





// document.getElementById('form-contato').addEventListener('submit', function(event, resp) {
//     event.preventDefault();

//     let form = $(this);
//     let g_recaptcha = $('.g-recaptcha');
//     let iframe = $('iframe');

//     console.log('this: ', this);
//     console.log('form: ', form);
//     console.log('g_recaptcha: ', g_recaptcha);
//     console.log('iframe: ', iframe);
//     console.log('event: ', event);
//     console.log('will: ');

//     let templateParams = {
//         name: document.querySelector('input[name="nome"]').value,
//         email: document.querySelector('input[name="email"]').value,
//         message: document.querySelector('textarea[name="mensagem"]').value,
//     };

//     // Obtém o valor do reCAPTCHA
//     const recaptchaResponse = grecaptcha.getResponse();

//     // Verifica se o reCAPTCHA foi completado
//     if (recaptchaResponse.length === 0) {
//         alert('Por favor, complete o reCAPTCHA.');
//         return;
//     }

//     // const token = req.body['g-recaptcha-response'];
//     const url = `https://www.google.com/recaptcha/api/siteverify?secret=${data.SECRET_KEY}&response`;
//     // const url = `https://www.google.com/recaptcha/api/siteverify?secret=${data.SECRET_KEY}&response=${token}`;
//     console.log('url: ', url);
//     $.ajax({
//         url: url, // URL da API
//         type: 'POST', // Método HTTP
//         contentType: 'application/json', // Tipo de conteúdo enviado
//         dataType: 'json', // Tipo de dado esperado
//         success: function(response) {
//             console.log('SUCCESS! ', response);
//             console.log(response); // Processa os dados da API
//         },
//         error: function(error) {
//             console.log('error! ', error);
//             console.error('There has been a problem with your AJAX operation:', error);
//         }
//     });
    
//     emailjs.send(data.SERVICE_ID, data.TEMPLATE_ID, templateParams)
//         .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);
//             alert('E-mail enviado com sucesso!');
//         }, function(error) {
//             console.log('FAILED...', error);
//             alert('Falha ao enviar e-mail.');
//         });
    
//     // Estes IDs de template e service devem corresponder ao que você configurou no EmailJS
//     emailjs.sendForm(data.SERVICE_ID, data.TEMPLATE_ID, this)
//         .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);
//         }, function(error) {
//             console.log('FAILED...', error);
//         });
// });

























// // $(document).ready(function () {
// //     document.getElementById('form-contato').addEventListener('submit', function(event) {
// //         event.preventDefault(); // Impede o envio padrão do formulário
    
// //         // Coletar os dados do formulário
// //         var name = document.getElementById('nome').value;
// //         var email = document.getElementById('email').value;
// //         var message = document.getElementById('mensagem').value;
// //         var telefone = document.getElementById('telefone').value;
// //         var profissao = document.getElementById('profissao').value;
    
// //         var mensagem = 'Nome: ' + name + '\n';
// //             mensagem += 'E-mail: ' + email + '\n';
// //             mensagem += 'Telefone: ' + telefone + '\n';
// //             mensagem += 'Profissão: ' + profissao + '\n';
// //             mensagem += 'Mensagem: ' + message + '\n';
    
// //         console.log('mensagem: ', mensagem);
// //         // Definir os parâmetros do template de e-mail
// //         var templateParams = {
// //             name: name,
// //             message: message
// //         };
    
// //         var service_id = 'service_8chfn3t';
// //         var template_id = 'template_4i2vrwc';
    
// //         // Enviar o e-mail usando EmailJS
// //         emailjs.send(service_id, template_id, templateParams)
// //             .then(function(response) {
// //                 console.log('SUCCESS!', response.status, response.text);
// //                 alert('Email enviado com sucesso!');
// //             }, function(error) {
// //                 console.log('FAILED...', error);
// //                 alert('Erro ao enviar o email.');
// //             });
// //     });
// // });



// // // code fragment
// // // the form id is myForm
// // $('#form-contato').on('submit', function(event) {
// //     console.clear();
// //     event.preventDefault(); // prevent reload
// //     var formData = new FormData(this);
// //     formData.append('service_id', service_id);
// //     formData.append('template_id', template_id);
// //     formData.append('user_id', public_key);
// //     console.log('this: ', formData);
 
// //     $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
// //         type: 'POST',
// //         data: formData,
// //         contentType: false, // auto-detection
// //         processData: false // no need to parse formData to string
// //     }).done(function() {
// //         alert('Your mail is sent!');
// //     }).fail(function(error) {
// //         alert('Oops... ' + JSON.stringify(error));
        
// //         console.log('json: ', JSON.stringify(error));
// //     });
// // });

// console.clear();
// document.getElementById('form-contato').addEventListener('submit', function(event) {
//     event.preventDefault();
//     console.log('this: ', this);
//     // Estes IDs de template e service devem corresponder ao que você configurou no EmailJS
//     emailjs.sendForm('service_8chfn3t', 'template_4i2vrwc', this)
//         .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);
//         }, function(error) {
//             console.log('FAILED...', error);
//         });
// });