      // Selecionar todos os inputs com a classe 'currency'
      const currencyInputs = document.querySelectorAll('.currency');

      // Adicionar evento para cada input
      currencyInputs.forEach((input) => {
        input.addEventListener('input', function (e) {
          let value = e.target.value;

          // Remover caracteres não numéricos
          value = value.replace(/\D/g, '');

          // Formatando o valor como moeda
          value = (value / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          });

          // Remover o "R$" duplicado (já que o prefixo é exibido pelo input-group-text)
          value = value.replace('R$', '').trim();

          // Atualizar o valor do campo
          e.target.value = value;
        });
      });


      // Selecionar os elementos
      const inicioVigenciaInput = document.getElementById('inicioVigencia');
      const periodoMesesInput = document.getElementById('periodoMeses');
      const fimVigenciaInput = document.getElementById('fimVigencia');

      // Função para calcular a data de fim da vigência
      function calcularFimVigencia() {
        const inicioVigencia = inicioVigenciaInput.value; // Data de início
        const periodoMeses = parseInt(periodoMesesInput.value); // Período em meses

        // Verificar se os valores são válidos
        if (inicioVigencia && !isNaN(periodoMeses) && periodoMeses > 0) {
          const dataInicio = new Date(inicioVigencia); // Converter para objeto Date
          dataInicio.setMonth(dataInicio.getMonth() + periodoMeses); // Adicionar os meses

          // Formatar a data no formato DD/MM/YYYY
          const fimVigenciaFormatada = dataInicio.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          });

          // Atualizar o campo de fim da vigência
          fimVigenciaInput.value = fimVigenciaFormatada;
        } else {
          // Limpar o campo de fim da vigência se os valores forem inválidos
          fimVigenciaInput.value = '';
        }
      }

      // Adicionar eventos para recalcular a data de fim da vigência
      inicioVigenciaInput.addEventListener('change', calcularFimVigencia);
      periodoMesesInput.addEventListener('input', calcularFimVigencia);

  // Função para enviar os dados via POST
function enviarDados() {  
    // Selecionar os campos do formulário
    const cpfLocatario = document.getElementById('cpf_locatario').value;
    const nomeLocatario = document.getElementById('nome_locatario').value;
    const emailLocatario = document.getElementById('email_locatario').value;
    const telefoneLocatario = document.getElementById('telefone_locatario').value;
    const cepLocatario = document.getElementById('cep_locatario').value;
    const logradouroLocatario = document.getElementById('logradouro_locatario').value;
    const numeroLogradouroLocatario = document.getElementById('numero_logradouro_locatario').value;
    const complementoLogradouroLocatario = document.getElementById('complemento_logradouro_locatario').value;
    const cidadeLocatario = document.getElementById('cidade_locatario').value;
    const estadoLocatario = document.getElementById('estado_locatario').value;

    const nomeLocador = document.getElementById('nome_locador').value;
    const cpfLocador = document.getElementById('cpf_locador').value;
    const emailLocador = document.getElementById('email_locador').value;
    const telefoneLocador = document.getElementById('telefone_locador').value;
    const cepLocador = document.getElementById('cep_locador').value;
    const logradouroLocador = document.getElementById('logradouro_locador').value;
    const numeroLogradouroLocador = document.getElementById('numero_logradouro_locador').value;
    const complementoLogradouroLocador = document.getElementById('complemento_logradouro_locador').value;
    const cidadeLocador = document.getElementById('cidade_locador').value;
    const estadoLocador = document.getElementById('estado_locador').value;

    const cepRisco = document.getElementById('cep_risco').value;
    const logradouroRisco = document.getElementById('logradouro_risco').value;
    const numeroLogradouroRisco = document.getElementById('numero_logradouro_risco').value;
    const complementoRisco = document.getElementById('complemento_risco').value;
    const cidadeRisco = document.getElementById('cidade_risco').value;
    const estadoRisco = document.getElementById('estado_risco').value;

    const dataInicioVigencia = document.getElementById('data_inicio_vigencia').value;
    const dataFimVigencia = document.getElementById('data_fim_vigencia').value;
    const periodo = document.getElementById('periodo').value;

    const isAluguel = document.getElementById('is_aluguel').value;
    const isIptu = document.getElementById('is_iptu').value;
    const isCondominio = document.getElementById('is_condominio').value;
    const isAgua = document.getElementById('is_agua').value;
    const isEnergiaEletrica = document.getElementById('is_energia_eletrica').value;
    const isGas = document.getElementById('is_gas').value;
    const isDanosImovel = document.getElementById('is_danos_imovel').value;
    const isPinturaInterna = document.getElementById('is_pintura_interna').value;
    const isPinturaExterna = document.getElementById('is_pintura_externa').value;
    const isMultaRecisoria = document.getElementById('is_multa_recisoria').value;

    // Criar o objeto com os dados
    const dados = {
      Nome_Locatario: nomeLocatario,
      CPF_Locatario: cpfLocatario,
      Email_Locatario: emailLocatario,
      Telefone_Locatario: telefoneLocatario,
      CEP_Locatario: cepLocatario,
      Logradouro_Locatario: logradouroLocatario,
      Numero_Logradouro: numeroLogradouroLocatario,
      Complemento_Logradouro_Locatario: complementoLogradouroLocatario,
      Cidade_Locatario: cidadeLocatario,
      Estado_Locatario: estadoLocatario,

      Nome_Locador: nomeLocador,
      CPF_Locador: cpfLocador,
      Email_Locador: emailLocador,
      Telefone_Locador: telefoneLocador,
      CEP_Locador: cepLocador,
      Logradouro_Locador: logradouroLocador,
      Numero_Logradouro_Locador: numeroLogradouroLocador,
      Complemento_Logradouro_Locador: complementoLogradouroLocador,
      Cidade_Locador: cidadeLocador,
      Estado_Locador: estadoLocador,

      CEP_Risco: cepRisco,
      Logradouro_Risco: logradouroRisco,
      Numero_Logradouro_Risco: numeroLogradouroRisco,
      Complemento_Risco: complementoRisco,
      Cidade_Risco: cidadeRisco,
      Estado_Risco: estadoRisco,

      Data_Inicio_Vigencia: dataInicioVigencia,
      Data_Fim_Vigencia: dataFimVigencia,
      Periodo: periodo,

      IS_Aluguel: isAluguel,
      IS_IPTU: isIptu,
      IS_Condominio: isCondominio,
      IS_Agua: isAgua,
      IS_Energia_Eletrica: isEnergiaEletrica,
      IS_Gas: isGas,
      IS_Danos_Imovel: isDanosImovel,
      IS_Pintura_Interna: isPinturaInterna,
      IS_Pintura_Externa: isPinturaExterna,
      IS_Multa_Recisoria: isMultaRecisoria
    };

    // Fazer a requisição POST
    fetch('http://127.0.0.1:5000/nova_cotacao', {
      method: 'POST', // Método HTTP
      headers: {
        'Content-Type': 'application/json' // Tipo de conteúdo enviado
      },
      body: JSON.stringify(dados) // Converter os dados para JSON
    })
      .then(response => {
        if (response.ok) {
          return response.json(); // Converter a resposta para JSON
        } else {
          throw new Error('Erro ao enviar os dados');
        }
      })
      .then(data => {
        // Exibir uma mensagem de sucesso ou tratar a resposta
        alert('Dados enviados com sucesso!');
        console.log('Resposta do servidor:', data);
      })
      .catch(error => {
        // Tratar erros
        alert('Ocorreu um erro ao enviar os dados.');
        console.error('Erro:', error);
      });
  }

    async function buscarEnderecoLocatario() {
        document.getElementById('logradouro_locatario').value = "";
        document.getElementById('cidade_locatario').value = "";
        document.getElementById('estado_locatario').value = "";

      // Obter o valor do campo de CEP
      const cep = document.getElementById('cep_locatario').value;

      // Verificar se o CEP é válido (apenas números e 8 dígitos)
      if (!/^\d{8}$/.test(cep)) {
        alert('Por favor, insira um CEP válido com 8 números.');
        return;
      }

      try {
        // Fazer a requisição para a API ViaCEP
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        // Verificar se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error('Erro ao buscar o endereço. Verifique o CEP e tente novamente.');
        }

        // Converter a resposta para JSON
        const data = await response.json();

        // Verificar se o CEP foi encontrado
        if (data.erro) {
          alert('CEP não encontrado. Verifique o CEP e tente novamente.');
          return;
        }

        // Preencher os campos com os dados retornados
        document.getElementById('logradouro_locatario').value = data.logradouro + ", " + data.bairro || '';
        document.getElementById('cidade_locatario').value = data.localidade || '';
        document.getElementById('estado_locatario').value = data.uf || '';
      } catch (error) {
        // Tratar erros de requisição
        alert('Ocorreu um erro ao buscar o endereço. Tente novamente mais tarde.');
        console.error('Erro:', error);
      }
  }

  async function buscarEnderecoLocador() {
      document.getElementById('logradouro_locador').value = "";
      document.getElementById('cidade_locador').value = "";
      document.getElementById('estado_locador').value = "";

    // Obter o valor do campo de CEP
    const cep = document.getElementById('cep_locador').value;

    // Verificar se o CEP é válido (apenas números e 8 dígitos)
    if (!/^\d{8}$/.test(cep)) {
      alert('Por favor, insira um CEP válido com 8 números.');
      return;
    }

    try {
      // Fazer a requisição para a API ViaCEP
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      // Verificar se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error('Erro ao buscar o endereço. Verifique o CEP e tente novamente.');
      }

      // Converter a resposta para JSON
      const data = await response.json();

      // Verificar se o CEP foi encontrado
      if (data.erro) {
        alert('CEP não encontrado. Verifique o CEP e tente novamente.');
        return;
      }

      // Preencher os campos com os dados retornados
      document.getElementById('logradouro_locador').value = data.logradouro + ", " + data.bairro || '';
      document.getElementById('cidade_locador').value = data.localidade || '';
      document.getElementById('estado_locador').value = data.uf || '';
    } catch (error) {
      // Tratar erros de requisição
      alert('Ocorreu um erro ao buscar o endereço. Tente novamente mais tarde.');
      console.error('Erro:', error);
    }
  }

  async function buscarEnderecoImovel() {
      document.getElementById('logradouro_imovel').value = "";
      document.getElementById('cidade_imovel').value = "";
      document.getElementById('estado_imovel').value = "";

    // Obter o valor do campo de CEP
    const cep = document.getElementById('cep_imovel').value;

    // Verificar se o CEP é válido (apenas números e 8 dígitos)
    if (!/^\d{8}$/.test(cep)) {
      alert('Por favor, insira um CEP válido com 8 números.');
      return;
    }

    try {
      // Fazer a requisição para a API ViaCEP
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      // Verificar se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error('Erro ao buscar o endereço. Verifique o CEP e tente novamente.');
      }

      // Converter a resposta para JSON
      const data = await response.json();

      // Verificar se o CEP foi encontrado
      if (data.erro) {
        alert('CEP não encontrado. Verifique o CEP e tente novamente.');
        return;
      }

      // Preencher os campos com os dados retornados
      document.getElementById('logradouro_imovel').value = data.logradouro + ", " + data.bairro || '';
      document.getElementById('cidade_imovel').value = data.localidade || '';
      document.getElementById('estado_imovel').value = data.uf || '';
    } catch (error) {
      // Tratar erros de requisição
      alert('Ocorreu um erro ao buscar o endereço. Tente novamente mais tarde.');
      console.error('Erro:', error);
    }
  }