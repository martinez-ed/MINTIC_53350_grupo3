// "RegExp" validadores
const mail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z-]{2,4}$");
const pass = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$");

// Array con información consignada en formulario
let registros = [];

// Función que valida el ingreso
function login() {
    var a = document.getElementById("correo").value;
    var b = document.getElementById("contrasena").value;
    var c = document.getElementById("captcha").value;  
    // Validar que no existan registros previos
    if (registros.length > 0) {
        // Validar campos del fromulario
        if (checkCorreo(a)==true && checkContrasena(b)==true && validarCAPTCHA(c)==true) {
            return agregarRegistro();
        }
    } else {
        console.log("No hay registros guardados");
        registros.push({correo:"juan@gmail.com",contrasena:"SecurePassword123"})
        return true;
    }
}

// Capturando la información del formulario
function agregarRegistro() {
    var dataForm = document.getElementById("form-login");
    let data = {
        correo: document.getElementById("correo").value,
        contrasena: document.getElementById("contrasena").value,
    };
    registros.push(data);
    console.log(registros);
    dataForm.reset();
}

// Validar "CORREO"
function checkCorreo(valor) {
    if (valor!="" && valor.match(mail)) {
        return true;
    }
    console.log("Correo NO valido");
    return false;
}
// Validar "CONTRASEÑA"
function checkContrasena(valor) { 
    if (valor!="" && valor.match(pass)) {
        return true;
    }
    console.log("Contraseña NO valida");
    return false;
}

// Validar "CAPTCHA"
function validarCAPTCHA(valor) {
    if (valor!="" && valor==1000) {
        return true;
    }
    console.log("Captcha NO valido");
    return false;
}

// Exportar las funciones
module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;
