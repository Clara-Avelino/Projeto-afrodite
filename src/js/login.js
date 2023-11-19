/* 
Essencialmente, este código se concentra em validar o 
e-mail, senha e confirmação de senha quando o formulário é 
submetido ou quando as teclas são pressionadas nos campos relevantes. 
Cada função de validação verifica se o valor inserido atende aos 
critérios estabelecidos e modifica a aparência do campo de acordo.
*/

// Seleciona os elementos de input de email, senha e confirmação de senha
const emailInput = document.querySelector('.email');
const passInput = document.querySelector('.password');
const cPassInput = document.querySelector('.confirm-password');

// Seleciona os elementos de contêiner para a senha e confirmação de senha
const passField = document.querySelector('.create-password');
const cPassField = document.querySelector('.confirm-password');

// Função para verificar se o formato do e-mail é válido
function checkEmail() {
    // Define um padrão para um formato de e-mail válido
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Verifica se o valor do campo de e-mail corresponde ao padrão
    if (!emailPattern.test(emailInput.value)) {
        // Se não corresponder, adiciona a classe 'invalid' ao elemento pai do campo de e-mail
        emailInput.parentElement.classList.add('invalid');
    } else {
        // Se corresponder, remove a classe 'invalid' do elemento pai do campo de e-mail
        emailInput.parentElement.classList.remove('invalid');
    }
}

// Função para validar a criação de senha
function createPass() {
    // Define um padrão para uma senha forte
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    
    // Verifica se a senha inserida corresponde ao padrão
    if (!passPattern.test(passInput.value)) {
        // Se não corresponder, adiciona a classe 'invalid' ao campo de criação de senha
        passField.classList.add('invalid');
    } else {
        // Se corresponder, remove a classe 'invalid' do campo de criação de senha
        passField.classList.remove('invalid');
    }
}

// Função para confirmar a senha
function confirmPass() {
    // Verifica se a senha e a confirmação de senha são diferentes ou se a confirmação está vazia
    if (passInput.value !== cPassInput.value || cPassInput.value === '') {
        // Se for diferente ou vazio, adiciona a classe 'invalid' ao campo de confirmação de senha
        cPassField.classList.add('invalid');
    } else {
        // Se forem iguais e não estiver vazio, remove a classe 'invalid' do campo de confirmação de senha
        cPassField.classList.remove('invalid');
    }
}

// Seleciona o formulário e adiciona um event listener para o evento de envio
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário
    
    // Chama as funções de validação de e-mail, senha e confirmação de senha
    checkEmail();
    createPass();
    confirmPass();
});

// Adiciona event listeners para o evento de soltar uma tecla nos campos de e-mail, senha e confirmação de senha
emailInput.addEventListener('keyup', checkEmail);
passInput.addEventListener('keyup', createPass);
cPassInput.addEventListener('keyup', confirmPass);

// Encontre o elemento do ícone de ocultar senha
const passwordHideIcons = document.querySelectorAll('.password-hide');

// Itere sobre todos os ícones de ocultar senha
passwordHideIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Encontre o campo de senha associado ao ícone
        const passwordInput = icon.parentElement.querySelector('.password');

        // Alterne o tipo de campo de senha entre 'password' e 'text'
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
});