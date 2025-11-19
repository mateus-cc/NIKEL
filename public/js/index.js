const myModal = new bootstrap.Modal("#register_modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

// criar conta
document.getElementById("create_form").addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email_create_input').value;
    const senha = document.getElementById('password_create_input').value;

    if (email.length < 5) {
        alert("Preenche o campo com um e-mail válido!");
        return;
    }

    if (senha.length < 4) {
        alert("A senha deve ter no mínimo 4 dígitos");
        return;
    }

    saveAccount({
        login: email,
        senha: senha,
        transactions: []
    });

    myModal.hide();

    alert("Conta criada com sucesso!");
})

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

// logar no sistema

document.getElementById('login_form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email_input').value;
    const senha = document.getElementById('password_input').value;
    const session = document.getElementById('session_check').checked;

    const account = getAccount(email);

    if (!account) {
        alert("Verifique o usuário ou a senha.");
        return;
    }

    if (account) {
        if (account.senha !== senha) {
            alert("Verifique o usuário ou a senha.");
            return;
        }

        saveSession(email, session);

        window.location.href = "home.html";
    }

})

function getAccount(key) {
    const account = localStorage.getItem(key);

    if (account) {
        return JSON.parse(account);
    }

    return "";
}

function saveSession(data, saveSession) {
    if (saveAccount) {
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data);
}

function checkLogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(logged) {
        saveSession(logged, session);

        window.location.href = "home.html";
    }
}