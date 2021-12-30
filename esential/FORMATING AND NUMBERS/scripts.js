const num = 2459.2;

function formatter(num) {
    return new Intl.NumberFormat('es-CO').format(num);
}

document.querySelector('#price').value = formatter(num);