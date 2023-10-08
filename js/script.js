    const formulario = document.getElementById('meuFormulario');
    const enviarBotao = document.getElementById('enviar');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); 

        if (!camposPreenchidos()) {
            alert('Por favor, preencha todos os campos antes de enviar o formulário.');
        } else {
            const email = document.getElementById('email').value;
            if (!validarEmail(email)) {
                alert('Por favor, insira um endereço de email válido.');
            } else {
                alert('Formulário enviado com sucesso!');
                
            }
        }
    });

    function camposPreenchidos() {
        const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
        for (const input of inputs) {
            if (!input.value.trim()) {
                return false;
            }
        }
        return true;
    }

    function validarEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

