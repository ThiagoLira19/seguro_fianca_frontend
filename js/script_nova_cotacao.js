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
    const TipoSeguro = document.getElementById('Tipo_Seguro').value;
    const Tipolocacao = document.getElementById('tipo_locacao').value;

    const cpfLocatario = document.getElementById('cpf_locatario');
    const nomeLocatario = document.getElementById('nome_locatario');
    const emailLocatario = document.getElementById('email_locatario');
    const telefoneLocatario = document.getElementById('telefone_locatario');
    const cepLocatario = document.getElementById('cep_locatario');
    const logradouroLocatario = document.getElementById('logradouro_locatario');
    const numeroLogradouroLocatario = document.getElementById('numero_locatario');
    const complementoLogradouroLocatario = document.getElementById('complemento_locatario');
    const cidadeLocatario = document.getElementById('cidade_locatario');
    const estadoLocatario = document.getElementById('estado_locatario');

    const nomeLocador = document.getElementById('nome_locador');
    const cpfLocador = document.getElementById('cpf_locador');
    const emailLocador = document.getElementById('email_locador');
    const telefoneLocador = document.getElementById('telefone_locador');
    const cepLocador = document.getElementById('cep_locador');
    const logradouroLocador = document.getElementById('logradouro_locador');
    const numeroLogradouroLocador = document.getElementById('numero_locador');
    const complementoLogradouroLocador = document.getElementById('complemento_locador');
    const cidadeLocador = document.getElementById('cidade_locador');
    const estadoLocador = document.getElementById('estado_locador');

    const cepRisco = document.getElementById('cep_imovel');
    const logradouroRisco = document.getElementById('logradouro_imovel');
    const numeroLogradouroRisco = document.getElementById('numero_imovel');
    const complementoRisco = document.getElementById('complemento_imovel');
    const cidadeRisco = document.getElementById('cidade_imovel');
    const estadoRisco = document.getElementById('estado_imovel');

    const dataInicioVigencia = document.getElementById('inicioVigencia');
    const dataFimVigencia = document.getElementById('fimVigencia');
    const periodo = document.getElementById('periodoMeses');

    const checkIsIptu = document.getElementById('iptu');
    const checkIsCondominio = document.getElementById('condominio');
    const checkIsAgua = document.getElementById('agua');
    const checkIsEnergiaEletrica = document.getElementById('energia');
    const checkIsGas = document.getElementById('gas');
    const checkIsDanosImovel = document.getElementById('danosImovel');
    const checkIsPinturaInterna = document.getElementById('pinturaInterna');
    const checkIsPinturaExterna = document.getElementById('pinturaExterna');
    const checkIsMultaRecisoria = document.getElementById('multaRecisoria');

    const isAluguel = document.getElementById('valorAluguel');
    const isIptu = document.getElementById('valorIptu');
    const isCondominio = document.getElementById('valorCondominio');
    const isAgua = document.getElementById('valorAgua');
    const isEnergiaEletrica = document.getElementById('valorEnergiaEletrica');
    const isGas = document.getElementById('valorGas');
    const isDanosImovel = document.getElementById('valorDanosImovel');
    const isPinturaInterna = document.getElementById('valorPinturaInterna');
    const isPinturaExterna = document.getElementById('valorPinturaExterna');
    const isMultaRecisoria = document.getElementById('valorMultaRecisoria');

    if (!nomeLocatario.checkValidity()) {
      alert(nomeLocatario.validationMessage);
      nomeLocatario.focus();
      return false;
    }

    if (!cpfLocatario.checkValidity()) {
      alert(cpfLocatario.validationMessage);
      cpfLocatario.focus();
      return false;
    }

    if (!emailLocatario.checkValidity()) {
      alert(emailLocatario.validationMessage);
      emailLocatario.focus();
      return false;
    }

    if (!telefoneLocatario.checkValidity()) {
      alert(telefoneLocatario.validationMessage);
      telefoneLocatario.focus();
      return false;
    }

    if (!logradouroLocatario.checkValidity()) {
      alert(logradouroLocatario.validationMessage);
      logradouroLocatario.focus();
      return false;
    }

    if (!numeroLogradouroLocatario.checkValidity()) {
      alert(numeroLogradouroLocatario.validationMessage);
      numeroLogradouroLocatario.focus();
      return false;
    }

    if (!cidadeLocatario.checkValidity()) {
      alert(cidadeLocatario.validationMessage);
      cidadeLocatario.focus();
      return false;
    }

    if (!estadoLocatario.checkValidity()) {
      alert(estadoLocatario.validationMessage);
      estadoLocatario.focus();
      return false;
    }

    // Validação dos campos do locador
    if (!nomeLocador.checkValidity()) {
      alert(nomeLocador.validationMessage);
      nomeLocador.focus();
      return false;
    }

    if (!cpfLocador.checkValidity()) {
      alert(cpfLocador.validationMessage);
      cpfLocador.focus();
      return false;
    }

    if (!emailLocador.checkValidity()) {
      alert(emailLocador.validationMessage);
      emailLocador.focus();
      return false;
    }

    if (!telefoneLocador.checkValidity()) {
      alert(telefoneLocador.validationMessage);
      telefoneLocador.focus();
      return false;
    }

    if (!cepLocador.checkValidity()) {
      alert(cepLocador.validationMessage);
      cepLocador.focus();
      return false;
    }

    if (!logradouroLocador.checkValidity()) {
      alert(logradouroLocador.validationMessage);
      logradouroLocador.focus();
      return false;
    }

    if (!numeroLogradouroLocador.checkValidity()) {
      alert(numeroLogradouroLocador.validationMessage);
      numeroLogradouroLocador.focus();
      return false;
    }

    if (!cidadeLocador.checkValidity()) {
      alert(cidadeLocador.validationMessage);
      cidadeLocador.focus();
      return false;
    }

    if (!estadoLocador.checkValidity()) {
      alert(estadoLocador.validationMessage);
      estadoLocador.focus();
      return false;
    }

    // Validação dos campos do imóvel (risco)
    if (!cepRisco.checkValidity()) {
      alert(cepRisco.validationMessage);
      cepRisco.focus();
      return false;
    }

    if (!logradouroRisco.checkValidity()) {
      alert(logradouroRisco.validationMessage);
      logradouroRisco.focus();
      return false;
    }

    if (!numeroLogradouroRisco.checkValidity()) {
      alert(numeroLogradouroRisco.validationMessage);
      numeroLogradouroRisco.focus();
      return false;
    }

    if (!cidadeRisco.checkValidity()) {
      alert(cidadeRisco.validationMessage);
      cidadeRisco.focus();
      return false;
    }

    if (!estadoRisco.checkValidity()) {
      alert(estadoRisco.validationMessage);
      estadoRisco.focus();
      return false;
    }

    // Validação das datas
    if (!dataInicioVigencia.checkValidity()) {
      alert(dataInicioVigencia.validationMessage);
      dataInicioVigencia.focus();
      return false;
    }

    if (!dataFimVigencia.checkValidity()) {
      alert(dataFimVigencia.validationMessage);
      dataFimVigencia.focus();
      return false;
    }

    // Validação dos valores financeiros
    if (!isAluguel.checkValidity()) {
      alert(isAluguel.validationMessage);
      isAluguel.focus();
      return false;
    }

    if (!isDanosImovel.value || isDanosImovel.value === "0,00") {
      alert("informe o valor do Danos ao Imóvel.");
      isDanosImovel.focus();
      return false;
    }

    if (checkIsIptu.checked) {
      if (!isIptu.value || isIptu.value === "0,00") {
        alert("informe o valor do IPTU.");
        isIptu.focus();
        return false;
      }
    }

    if (checkIsCondominio.checked) {
      if (!isCondominio.value || isCondominio.value === "0,00") {
        alert("informe o valor do Condomínio.");
        isCondominio.focus();
        return false;
      }
    }

    if (checkIsAgua.checked) {
      if (!isAgua.value || isAgua.value === "0,00") {
        alert("informe o valor da Água.");
        isAgua.focus();
        return false;
      }
    }

    if (checkIsEnergiaEletrica.checked) {
      if (!isEnergiaEletrica.value || isEnergiaEletrica.value === "0,00") {
        alert("informe o valor da Energia Elétrica.");
        isEnergiaEletrica.focus();
        return false;
      }
    }

    if (checkIsGas.checked) {
      if (!isGas.value || isGas.value === "0,00") {
        alert("informe o valor do Gás.");
        isGas.focus();
        return false;
      }
    }

    if (checkIsPinturaInterna.checked) {
      if (!isPinturaInterna.value || isPinturaInterna.value === "0,00") {
        alert("informe o valor da Pintura Interna.");
        isPinturaInterna.focus();
        return false;
      }
    }

    if (checkIsPinturaExterna.checked) {
      if (!isPinturaExterna.value || isPinturaExterna.value === "0,00") {
        alert("informe o valor da Pintura Externa.");
        isPinturaExterna.focus();
        return false;
      }
    }

    if (checkIsMultaRecisoria.checked) {
      if (!isMultaRecisoria.value || isMultaRecisoria.value === "0,00") {
        alert("informe o valor da Multa Recisória.");
        isMultaRecisoria.focus();
        return false;
      }
    }

    // Criar o objeto com os dados
    const dados = {
      Tipo_Seguro: TipoSeguro,
      tipo_locacao: Tipolocacao,

      Nome_Locatario: nomeLocatario.value,
      CPF_Locatario: cpfLocatario.value,
      Email_Locatario: emailLocatario.value,
      Telefone_Locatario: telefoneLocatario.value,
      CEP_Locatario: cepLocatario.value,
      Logradouro_Locatario: logradouroLocatario.value,
      Numero_Logradouro_Locatario: numeroLogradouroLocatario.value,
      Complemento_Logradouro_Locatario: complementoLogradouroLocatario.value,
      Cidade_Locatario: cidadeLocatario.value,
      Estado_Locatario: estadoLocatario.value,

      Nome_Locador: nomeLocador.value,
      CPF_Locador: cpfLocador.value,
      Email_Locador: emailLocador.value,
      Telefone_Locador: telefoneLocador.value,
      CEP_Locador: cepLocador.value,
      Logradouro_Locador: logradouroLocador.value,
      Numero_Logradouro_Locador: numeroLogradouroLocador.value,
      Complemento_Logradouro_Locador: complementoLogradouroLocador.value,
      Cidade_Locador: cidadeLocador.value,
      Estado_Locador: estadoLocador.value,

      CEP_Risco: cepRisco.value,
      Logradouro_Risco: logradouroRisco.value,
      Numero_Logradouro_Risco: numeroLogradouroRisco.value,
      Complemento_Risco: complementoRisco.value,
      Cidade_Risco: cidadeRisco.value,
      Estado_Risco: estadoRisco.value,

      Data_Inicio_Vigencia: dataInicioVigencia.value,
      Data_Fim_Vigencia: dataFimVigencia.value,
      Periodo: periodo.value,

      IS_Aluguel: isAluguel.value,
      IS_IPTU: isIptu.value,
      IS_Condominio: isCondominio.value,
      IS_Agua: isAgua.value,
      IS_Energia_Eletrica: isEnergiaEletrica.value,
      IS_Gas: isGas.value,
      IS_Danos_Imovel: isDanosImovel.value,
      IS_Pintura_Interna: isPinturaInterna.value,
      IS_Pintura_Externa: isPinturaExterna.value,
      IS_Multa_Recisoria: isMultaRecisoria.value
    };

    console.log(JSON.stringify(dados));

    // Fazer a requisição POST
    fetch('https://data-science-ia.com.br/nova_cotacao', {
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