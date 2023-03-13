const form = document.getElementById("form-valores");
const valorB = document.getElementById('valor-b');
let formValido = false;    

function validaValores(valorA, valorB) {
    return valorB > valorA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = document.getElementById('valor-a');
    const valorB = document.getElementById('valor-b');

    formValido = validaValores(valorA.value, valorB.value);
	console.log(formValido);

    if (!formValido) {
        document.querySelector('.sucess-message').style.display = 'none';

        valorB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        valorB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
        
        document.querySelector('.sucess-message').style.display = 'block';
    }

});
