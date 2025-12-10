const organizadores = [
    { email: "admin@ifes.com ", senha: "12345" },
    { email: "admin@ifes.com", senha: "admin2025" },
    { email: "barbara@ifes.com", senha: "12345" },
    { email: "henrique1@ifes.com", senha: "12345" },
    { email: "henrique2@ifes.com", senha: "12345" },
    { email: "luan@ifes.com", senha: "12345" }

];

const btAcessar = document.getElementById("btAcessar");
const outMsg = document.getElementById("outMsg");

btAcessar.addEventListener("click", () => {
    const email = document.getElementById("inEmail").value.trim();
    const senha = document.getElementById("inSenha").value.trim();

    // procura organizador
    const autorizado = organizadores.find(user =>
        user.email === email && user.senha === senha
    );

    if (autorizado) {
        outMsg.style.color = "green";
        outMsg.textContent = "Login realizado com sucesso! Redirecionando...";
        window.location.href = "home.html";
        return false;   // impede a página de recarregar
    } else {
        outMsg.style.color = "red";
        outMsg.textContent = "Acesso negado! Email ou senha incorretos.";
        return false;   // mantém na página para tentar novamente
    }
});
