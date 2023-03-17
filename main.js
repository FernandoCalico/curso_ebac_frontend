const form = document.getElementById("form-tarefa");
const lista = document.getElementById("lista-tarefas");
const inputTarefa = document.getElementById("nome-tarefa");
const tarefas = [];

let numeroItem = 0;
let nomeItem = "";

inputTarefa.addEventListener("change", function(e) {
    $('.error-message').css('display', 'none');
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nomeTarefa = $('#nome-tarefa').val();
    
    if (!tarefas.includes(nomeTarefa)) {
        numeroItem ++
        nomeItem = "item" + numeroItem;

        const novaTarefa = $(`<li><a href=" " id="${nomeItem}">${nomeTarefa}</a></li>`).appendTo('ul');   

        tarefas.push(nomeTarefa);
        $('.error-message').css('display', 'none');
        $('#nome-tarefa').val('');
    } else {
        $('.error-message').css('display', 'grid')
        ;
    };

});

lista.addEventListener('click', function(e) {
    e.preventDefault();
    
    if ($(`#${e.target.id}`).click()) {

        if ($(`#${e.target.id}`).css('text-decoration').indexOf('none') >= 0) {
            $(`#${e.target.id}`).css('text-decoration', 'line-through');
        } else {
            $(`#${e.target.id}`).css('text-decoration', 'none');
        };
    };

});

