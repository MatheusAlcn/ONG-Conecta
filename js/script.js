// ONG Conecta - script.js
// Responsável pelo menu responsivo e pelo modal (<dialog>).

// Avisa o CSS que o JavaScript está ativo
document.documentElement.classList.add("js");

// ---------- MENU RESPONSIVO ----------
const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        const aberto = menu.classList.toggle("aberto");
        botaoMenu.setAttribute("aria-expanded", aberto);
    });
}

// ---------- MODAL ----------
const botaoAbrir = document.querySelector(".btn-modal");
const modal = document.querySelector(".modal");

if (botaoAbrir && modal) {
    const botoesFechar = modal.querySelectorAll(".modal-close, .modal-fechar-texto");

    function abrirModal() {
        modal.showModal(); // abre e prende o foco dentro do modal
    }

    function fecharModal() {
        modal.classList.add("fechando");
        setTimeout(function () {
            modal.classList.remove("fechando");
            modal.close(); // devolve o foco ao botão que abriu o modal
        }, 200);
    }

    botaoAbrir.addEventListener("click", abrirModal);

    botoesFechar.forEach(function (botao) {
        botao.addEventListener("click", fecharModal);
    });

    // Fecha ao clicar fora da caixa (no fundo escuro)
    modal.addEventListener("click", function (evento) {
        if (evento.target === modal) {
            fecharModal();
        }
    });
    // A tecla Esc já fecha o <dialog> automaticamente
}

// ---------- FORMULÁRIO DE CADASTRO ----------
const formulario = document.querySelector("#form-cadastro");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");

if (formulario && mensagemSucesso) {
    // O evento "submit" só acontece se o navegador já validou os campos
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();
        mensagemSucesso.hidden = false;
        mensagemSucesso.scrollIntoView({ behavior: "smooth", block: "center" });
        formulario.reset();
    });

    // Esconde a mensagem quando o usuário limpa ou começa um novo cadastro
    formulario.addEventListener("input", function () {
        mensagemSucesso.hidden = true;
    });
}