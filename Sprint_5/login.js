// "RegExp" validadores
const mail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z-]{2,4}$");
const pass = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$");

// Array con información consignada en formulario
let registros = [];

// Función que valida el ingreso
function login() {
    var EMAIL = mail.exec(correo.value);
    var PASS = pass.exec(contrasena.value);
    if (!EMAIL || EMAIL==null || EMAIL=="" )  {
    // console.error(correo.value + ' Falso');
    return false;
    } else {
        if (!PASS || PASS==null || PASS=="" ) {
            return false;
        }
        else{
    // console.log('Verdadero '+ OK[0]);
    return true;
        }
    }
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
