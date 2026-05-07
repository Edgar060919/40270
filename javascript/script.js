let resultado = document.getElementById("resultado");
let prm = 0;
let operacion = "";

function numero(e) {
    resultado.value += e.target.innerText;
}

function sumar(e) {
    prm = resultado.value;
    operacion = e.target.innerText;
    resultado.value = "";
    e.target.style.backgroundColor = "red";
}

function restar(e) {
    prm = resultado.value;
    operacion = e.target.innerText;
    resultado.value = "";
    e.target.style.backgroundColor = "red";
}

function multiplicar(e) {
    prm = resultado.value;
    operacion = e.target.innerText;
    resultado.value = "";
    e.target.style.backgroundColor = "red";
}

function dividir(e) {
    prm = resultado.value;
    operacion = e.target.innerText;
    resultado.value = "";
    e.target.style.backgroundColor = "red";
}

function igual() {
    let prm2 = resultado.value;

    if (operacion == "+") {
        resultado.value = parseInt(prm) + parseInt(prm2);
    }

    if (operacion == "-") {
        resultado.value = parseInt(prm) - parseInt(prm2);
    }

    if (operacion == "*") {
        resultado.value = parseInt(prm) * parseInt(prm2);
    }

    if (operacion == "/") {
        resultado.value = parseInt(prm) / parseInt(prm2);
    }
}

function limpiar() {
    resultado.value = "";
    prm = 0;
    operacion = "";
}