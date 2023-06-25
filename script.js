const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs () {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === "") {
        setErrorFor(username, "o nome do usuário é obrigatorio.");
    } else {
        setSuccesFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "o email é obrigatório");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "por favor, insira um email valido.")
    } else {
        setSuccesFor(email);
    }

    if (passwordValue === "") {
        setErrorFor (password, "a senha é obrigatória.")
    } else if (passwordValue.length < 7) {
        setErrorFor (password, "a senha precisa ter no mínimo 7 caracteres.");
    } else {
        setSuccesFor (password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor (passwordConfirmation, "a confirmação de senha é obrigatória.");
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor (passwordConfirmation, "as senhas não conferem.");
    } else {
        setSuccesFor (passwordConfirmation);
    }

    const formControls = form.querySelectorAll('.form-control');

        const formIsValid = [...formControls].every(formControl => {
            return (formControl.className === 'form-control success');
        });

        if (formIsValid) {
            console.log("o formulario esta 100% valido");
        }
}

function setErrorFor (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //adiciona a mensagem de erro
    small.innerText = message;

    //adiciona a classe de erro
    formControl.className = 'form-control error'
}

function setSuccesFor (input) {
    const formControl = input.parentElement;

    // adicionar classe de sucesso
    formControl.className = 'form-control success'; 
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }