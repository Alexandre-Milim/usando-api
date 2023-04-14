        // Seleciona o formulário
        var form = document.querySelector("#formFilmes");

        // Adiciona um evento de envio ao formulário
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita que o formulário seja enviado


            var query = document.querySelector("input[name=query]").value;

            var url = "https://api.jikan.moe/v4/anime?q=&sfw";

            fetch(url)
                .then(function(response) {
                    return response.json(); // Transforma o JSON em um objeto JavaScript
                })
                // A variavel data recebe o objeto retornado pela api e é acessado os valores
                .then(function(data) {
                    var conteudo = document.querySelector("#conteudo");
                    console.log(data);

                    // Loop através dos resultados de pesquisa e adiciona um cartão de filme para cada um
                    data.data.forEach(filme => {
                        // Cria um cartão de filme HTML com o título, imagem e ano de lançamento do filme
                        var cartaoFilme = "<div><h3>" + filme.title + "</h3><img src='" + filme.images.jpg.image_url + "'><p>Ano: " + filme.year + "</p></div>";

                        // Adiciona o cartão de filme à página
                        conteudo.innerHTML += cartaoFilme;
                    });
                });
        });