const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const SECRET_KEY = '6LdR0xQqAAAAAFWDo0Zf0HA0Zqa4ETNLxX8wEg7O'; // Substitua YOUR_SECRET_KEY pela sua chave secreta do reCAPTCHA

app.post('/submit-form', (req, res) => {
    const token = req.body['g-recaptcha-response'];
    console.log('token: ', token);
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`;

    fetch(url, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            console.error('data: ', data);
            if (data.success) {
                // O reCAPTCHA foi verificado com sucesso
                res.send('reCAPTCHA verificado com sucesso');
            } else {
                // O reCAPTCHA falhou
                res.status(400).send('Falha na verificação do reCAPTCHA');
            }
        })
        .catch(error => {
            console.error('error: ', error);
            res.status(500).send('Erro ao verificar o reCAPTCHA');
        });
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});





































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

// // var service_id = 'service_8chfn3t';
// // var template_id = 'template_4i2vrwc';
// // var public_key = '7rclEQHz0eQe_IYyO';

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