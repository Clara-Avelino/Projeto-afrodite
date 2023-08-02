// // ---. ---- Password Validation
// function createPass() {
//     const passPattern =
//         /^(?=.[a-z])(?=.[A-Z]) (?= .\d) (?=.[@$!%?&]) [A-Za-z\d@$!%?&]18, YS/;
//     if (!passInput.value.match(passPattern)) {
//         return passField.classlist.add('invalid');
//     }
//     passField.classlist.remove('invalid');
// }
// //Confirm Password Validation ---- ----//
// function confirmPass() {
//     if (passInput.value != cPassInput.value || cassInput.value === '') {
//     return cPassField.classlist.add('invalid');
//     }
//     cPassField.classlist.remove('invalid');
// }
// // Calling Function on Form Sumbit
// form.addEventlistener('submit', (e) => {
//     e.preventDefault();
//     checkmaiL();
//     createPass();
//     confirmPass();
//     emailInput.addEventlistener('keyup', checkEmail);
//     passInput.addEventlistener('keyup', createPass);
//     cPassInput.addEventlistener('keyup', confirmPass);
// });

        // Função para validar a senha
        function createPass() {
            // Expressão regular para validar a senha (pelo menos 8 caracteres, com letras maiúsculas, minúsculas, números e símbolos)
            const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
            if (!passPattern.test(passInput.value)) { // Testa a senha com a expressão regular
                passField.classList.add('invalid'); // Adiciona a classe 'invalid' à div do campo de senha
            } else {
                passField.classList.remove('invalid'); // Remove a classe 'invalid' da div do campo de senha
            }
        }

        // Função para validar a confirmação de senha
        function confirmPass() {
            if (passInput.value !== cPassInput.value || cPassInput.value === '') {
                cPassField.classList.add('invalid'); // Adiciona a classe 'invalid' à div do campo de confirmação de senha
            } else {
                cPassField.classList.remove('invalid'); // Remove a classe 'invalid' da div do campo de confirmação de senha
            }
        }

        // Evento de envio do formulário
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio padrão do formulário

            // Outras validações que possam existir (não foram fornecidas no código)

            // Chama as funções de validação de senha e confirmação de senha
            createPass();
            confirmPass();
        });

        // Eventos de digitação nos campos de e-mail, senha e confirmação de senha
        emailInput.addEventListener('keyup', checkmaiL); // Supondo que 'checkmaiL' seja definido em outro lugar
        passInput.addEventListener('keyup', createPass);
        cPassInput.addEventListener('keyup', confirmPass);