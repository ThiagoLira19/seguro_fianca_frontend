// Função para formatar a data no formato dd/mm/aaaa hh:mm:ss
        function formatarData(dataISO) {
            const data = new Date(dataISO); // Converte a string ISO para um objeto Date

            // Extrai os componentes da data
            const dia = String(data.getDate()).padStart(2, "0"); // Adiciona zero à esquerda, se necessário
            const mes = String(data.getMonth() + 1).padStart(2, "0"); // Os meses começam em 0, então adicionamos 1
            const ano = data.getFullYear();

            // Extrai os componentes do horário
            const horas = String(data.getHours()).padStart(2, "0");
            const minutos = String(data.getMinutes()).padStart(2, "0");
            const segundos = String(data.getSeconds()).padStart(2, "0");

            // Retorna a data formatada
            return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
        }


// Função para buscar os dados da API
        async function fetchCotacoes() {
            const url = "https://data-science-ia.com.br/list_by_cod_mediador_and_status";
            const payload = {
                cod_mediador: "", // Substitua pelo valor correto, se necessário
                status: "Aguardando processamento da cotacao"
            };

            try {
                // Fazendo a requisição POST para a API
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });

                // Verifica se a resposta foi bem-sucedida
                if (!response.ok) {
                    throw new Error(`Erro na API: ${response.statusText}`);
                }

                // Converte a resposta para JSON
                const data = await response.json();
                
                // Chama a função para preencher a tabela
                populateTable(data);
            } catch (error) {
                console.error("Erro ao buscar cotações:", error);
            }
        }


// Função para preencher a tabela com os dados
        function populateTable(cotacoes) {
            const tbody = document.getElementById("cotacoes-tbody");
            tbody.innerHTML = ""; // Limpa a tabela antes de preencher

            cotacoes.forEach((cotacao, index) => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${formatarData(cotacao.data_hora_cotacao)}</td>
                    <td>${cotacao.numero_cotacao}</td>
                    <td>${cotacao.nome_locador}</td>
                    <td>${cotacao.nome_locatario}</td>
                    <td>${cotacao.tipo_locacao}</td>
                    <td>${cotacao.status}</td>
                    <td><button type="button" class="btn btn-success btn-sm"><i class="bi bi-eye"></i>&nbsp;&nbsp;Visualizar</button></td>
                `;

                tbody.appendChild(row);
            });
        }

// Chama a função para buscar os dados ao carregar a página
document.addEventListener("DOMContentLoaded", fetchCotacoes);