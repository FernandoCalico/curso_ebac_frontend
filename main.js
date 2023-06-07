function Pessoa(nome) {
    this.nome = nome;
};

function Cargo(funcao, nivel, salario) {
    this.funcao = funcao;
    this.nivel = nivel;
    this.nomeCargo = this.funcao
    
    if (this.nivel != '') {
        this.nomeCargo = this.nomeCargo + ' - ' + this.nivel;
    };

    //Encapsulando Salário
    let _salario = salario;

    //Getter Salário
    this.getSalario = function() {
        return _salario;
    };

    //Setter Salário
    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        };
    };
};

function Funcionario(nome, cargo, nivel, salario) {
    Pessoa.call(this, nome);
    Cargo.call(this, cargo, nivel, salario);
};

function GerenciaProjeto(descricao, funcionario) {
    Pessoa.call(this, funcionario.nome);
    Cargo.call(this, funcionario.cargo, funcionario.nivel, funcionario.salario);
    funcionario.setSalario(funcionario.getSalario() * 1.1);
    this.descricao = descricao;
};

funcionario1 = new Funcionario('Fernando', 'Analista de Sistemas', 'Sênior', 5000);
funcionario2 = new Funcionario('João', 'Analista de Sistemas', 'Júnior', 2000);
funcionario3 = new Funcionario('Maria', 'Recepcionista', '', 1200);

gerencia1 = new GerenciaProjeto('Gerente do Projeto - EBAC', funcionario1);

//Salario Sobe 10% devido a Gerencia do Projeto
console.log(funcionario1.nome, funcionario1.nomeCargo, funcionario1.getSalario());
console.log(gerencia1.nome, gerencia1.descricao);

//Salário normal para os demais
console.log(funcionario2.nome, funcionario2.nomeCargo, funcionario2.getSalario());
console.log(funcionario3.nome, funcionario3.nomeCargo, funcionario3.getSalario());


