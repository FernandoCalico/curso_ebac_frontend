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
});
