// Foca automaticamente no campo de telefone ao carregar a página
window.onload = function() {
    const phoneInput = document.getElementById("phone");
    phoneInput.focus();

    // Adiciona o evento de tecla pressionada no campo de telefone
    phoneInput.addEventListener("keypress", function(event) {
        // Verifica se a tecla pressionada é 'Enter'
        if (event.key === "Enter") {
            event.preventDefault(); // Impede o comportamento padrão de envio do formulário
            openWhatsAppWeb(); // Chama a função para abrir o WhatsApp Web
        }
    });
};

function formatPhone(input) {
    let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    
    if (value.length === 0) {
        input.value = ''; // Limpa o campo se não houver número
        return;
    }
    
    if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else {
        value = value.replace(/^(\d*)/, '($1');
    }
    
    input.value = value;
}

function openWhatsAppWeb() {
    const phoneInput = document.getElementById("phone").value;
    const phoneNumber = phoneInput.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (phoneNumber.length === 11) {
        const whatsappWebUrl = `https://web.whatsapp.com/send?phone=55${phoneNumber}`;
        window.open(whatsappWebUrl, '_blank'); // Abre o WhatsApp Web em uma nova aba
    } else {
        alert("Por favor, insira um número de telefone válido.");
    }
}
