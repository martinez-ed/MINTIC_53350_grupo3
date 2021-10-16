// "RegExp" validadores
const mail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z-]{2,4}$");
const pass = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$");

// Array con información consignada en formulario
let registros = [];

// Función que valida el ingreso
function login() {
    if (registros.length > 0) {
        // Validar "CORREO"
        // Validar "CONTRASEÑA"
        return true;
    }
    return false;
}

// Función para capturar la información del formulario
function agregarRegistro() {
    var dataForm = document.getElementById("form-login");
    let data = {
        correo: document.getElementById("correo").value,
        pass: document.getElementById("contrasena").value,
        captcha: document.getElementById("captcha").value,
    };
    registros.push(data);
    dataForm.reset();
}

// Función que valida el captcha
function validarCAPTCHA(valor) {
    if (valor!="" && valor==1000) {
        return true;
    }
    // alert("El valor ingresado NO es válido");
    return false;
}

// Exportar las funciones
module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;
