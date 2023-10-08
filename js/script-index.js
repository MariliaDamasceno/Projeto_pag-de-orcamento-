function consultaEndereco() {
    let cep = document.querySelector("#localidade").value;
    if (cep.length != 8) {
        alert("CEP INVÁLIDO");
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
        .then(function(response) {
            response.json().then(function(data) {
                mostrarEndereco(data);
            });
        });
}

function mostrarEndereco(dados) {
    let nomeLocalizacao = document.querySelector(".minha-localizacao"); 
    if (dados.erro) {
        nomeLocalizacao.innerHTML = "CEP NÃO ENCONTRADO";
    } else {
        nomeLocalizacao.innerHTML = dados.localidade;
        
    }
}
