document.addEventListener("DOMContentLoaded", () => {
    //  Editar perfil
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault(); 

            const email = document.getElementById("login-email").value;
            const senha = document.getElementById("login-senha").value;

            // Simulação de login (substitua por backend real)
            if (email === "admin@exemplo.com" && senha === "123456") {
                localStorage.setItem("usuario", email); 
                window.location.href = "index.html"; l
            } else {
                alert("E-mail ou senha incorretos!");
            }
        });
    }


    //  BOTÃO DE EDITAR PERFIL
    const btnEditarPerfil = document.getElementById("editar-perfil");

    if (btnEditarPerfil) {
        btnEditarPerfil.addEventListener("click", () => {
            const novoNome = prompt("Digite seu novo nome:");
            if (novoNome) {
                usuarioNome.textContent = novoNome;
            }
        });
    }

    const btnLogout = document.getElementById("logout");

    if (btnLogout) {
        btnLogout.addEventListener("click", () => {
            localStorage.removeItem("usuario");
            window.location.href = "login.html";
        });
    }
});

document.getElementById("toggle-theme").addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});

// Exemplo de gráfico de atividade com Chart.js
const ctx = document.getElementById('activityChart').getContext('2d');
const activityChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Atividade Mensal',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: '#42a5f5',
            backgroundColor: 'rgba(66, 165, 245, 0.2)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Script para alternar entre editar perfil e ver perfil
const btnEditar = document.getElementById('btn-editar');
const formEditar = document.getElementById('form-editar');
const cancelarEdicao = document.getElementById('cancelar-edicao');
const nomePerfil = document.getElementById('nome-perfil');
const emailPerfil = document.getElementById('email-perfil');

// Exibir o formulário de edição
btnEditar.addEventListener('click', () => {
    formEditar.style.display = 'block'; // Exibe o formulário
    const nome = nomePerfil.textContent;
    const email = emailPerfil.textContent;
    document.getElementById('nome').value = nome; // Preenche com os valores atuais
    document.getElementById('email').value = email;
});

// Cancelar a edição
cancelarEdicao.addEventListener('click', () => {
    formEditar.style.display = 'none'; // Oculta o formulário
});

// Submeter o formulário de edição
document.getElementById('editar-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio do formulário

    const novoNome = document.getElementById('nome').value;
    const novoEmail = document.getElementById('email').value;

    // Atualiza as informações no perfil
    nomePerfil.textContent = novoNome;
    emailPerfil.textContent = novoEmail;

    // Oculta o formulário de edição após salvar
    formEditar.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", () => {
    const gerarRelatorioBtn = document.getElementById("gerar-relatorio");
    const relatorioSelect = document.getElementById("relatorio-select");
    const feedback = document.getElementById("feedback");
    const cancelarAcaoBtn = document.getElementById("cancelar-acao");

    const configForm = document.getElementById("config-form");
    const configFeedback = document.getElementById("config-feedback");
    const cancelarConfigBtn = document.getElementById("cancelar-config");

    function mostrarMensagem(mensagemElemento) {
        mensagemElemento.style.display = "block";
        setTimeout(() => {
            mensagemElemento.style.display = "none";
        }, 3000);
    }

    gerarRelatorioBtn.addEventListener("click", () => {
        if (relatorioSelect.value) {
            mostrarMensagem(feedback);
        } else {
            alert("Por favor, selecione um tipo de relatório.");
        }
    });

    cancelarAcaoBtn.addEventListener("click", () => {
        relatorioSelect.value = "";
        alert("Ação cancelada.");
    });

    configForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (configForm.checkValidity()) {
            mostrarMensagem(configFeedback);
        } else {
            alert("Preencha todos os campos corretamente.");
        }
    });

    cancelarConfigBtn.addEventListener("click", () => {
        configForm.reset();
        alert("Alterações canceladas.");
    });
});

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Preencha todos os campos!");
    } else {
        window.location.href = "./inicio.html"; 
    }
}