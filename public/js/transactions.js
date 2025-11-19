const myModal = new bootstrap.Modal("#transaction_modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    transactions: []
};

document.getElementById("btn_logout").addEventListener("click", logout);


function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html";
}

// adiciona lançamento
document.getElementById("transaction_form").addEventListener("submit", function (e) {
    e.preventDefault();

    const value = parseFloat(document.getElementById("value_input").value);
    const description = document.getElementById("description_input").value;
    const date = document.getElementById("date_input").value;
    const type = document.querySelector('input[name="type_input"]:checked').value;

    data.transactions.unshift({
        value: value, type: type, description: description, date: date
    });

    saveData(data);

    e.target.reset();
    myModal.hide();
    getTransaction();

    alert("Lançamento adicionado com sucesso.");

});

checkLogged();

function checkLogged() {
    if (session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if (!logged) {
        window.location.href = "index.html";
        return;
    }

    const dataUser = localStorage.getItem(logged);
    if (dataUser) {
        data = JSON.parse(dataUser);
    }
}

function saveData(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function getTransaction() {
    const transactions = data.transactions;
    let transactionsHtml = ``;

    if(transactions.length) {
        transactions.forEach((item) => {
            let type = "Entrada";

            if(item.type == "2") {
                type = "Saída";
            }

            transactionsHtml += `                                        
            <tr>
                <th scope="row">${item.date}</th>
                <td>${item.value.toFixed(2)}</td>
                <td>${type}</td>
                <td>${item.description}</td>
            </tr>`
        })
    }

    document.getElementById("transactions_list").innerHTML = transactionsHtml;
}