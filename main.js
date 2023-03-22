function form_limpa_campos() {
    // Limpa valores do formulário de cadastro
    $("#nomeCompleto").val("");
    $("#email").val("");
    $("#telefone").val("");
    $("#cpf").val("");
    $("#cep").val("");
    $("#rua").val("");
    $("#numeroComplemento").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#uf").val("");
    $("#mensagem").val("");
}

function limpa_endereco() {
    // Limpa valores do formulário de endereço
    $("#rua").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#uf").val("");
}

function erro_cep() {
    $("#cep").val("");
}

$(document).ready(function() {
    //Para trocar de campo pressionando enter
    $('.campo').on('keypress', function(e){
        var tecla = (e.keyCode?e.keyCode:e.which);      

        if(tecla == 13){
            campo = $('.campo');
            indice = campo.index(this);

            if(campo[indice+1] != null){
                proximo = campo[indice + 1];
                proximo.focus();
                e.preventDefault(e);
            }
        }
    });

    //Mascara dos campos
    $('#telefone').mask('(00) Z0000-0000', {
        translation: {
            'Z': {
                pattern: /[ 0-9]/, optional: false
            }
        }
    });

    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000');
    
    //Quando o campo cep perde o foco.
    $("#cep").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);

                        $("#uf").val(dados.uf);
                        $("#numeroComplemento").focus();
                    } 
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_endereco();
                        alert("CEP não encontrado.");
                        erro_cep();
                    }
                });
            }
            else {
                //cep é inválido.
                limpa_endereco();
                alert("Formato de CEP inválido.");
                erro_cep();
            }
        }
        else {
            //cep sem valor, limpa formulário.
            limpa_endereco();
            erro_cep();
        }
    });

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            rua: {
                required: true
            },
            numeroComplemento: {
                required: true
            },
            bairro: {
                required: true
            },
            cidade: {
                required: true
            },
            uf: {
                required: true
            },
        },
        messages: {
            nomeCompleto: 'Por favor insira o seu nome',
            email: 'Por favor insira um e-mail válido',
            telefone: 'Por favor insira um telefone válido',
            cpf: 'Por favor insira um CPF válido',
            cep: 'Por favor insira um cep válido',
            rua: 'Por favor insira o nome da rua, av, al, estrada, etc.',
            numeroComplemento: 'Por favor insira o número casa/ prédio e o complemento',
            bairro: 'Por favor insira o bairro',
            cidade: 'Por favor insira a cidade',
            uf: 'Por favor insira o estado',
            mensagem: 'Por favor insira uma mensagem'
        },
        submitHandler: function(form) {
            console.log(form);
            form_limpa_campo();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            };
        }
    });
});

