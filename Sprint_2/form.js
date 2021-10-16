// "RegExp" validadores
const text = new RegExp("^[a-zA-ZÀ-ÿ ]{4,30}$");
const phone = new RegExp("^[0-9]{7}$");
const mail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z-]{2,4}$");
const pass = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$");

// Validar "NOMBRE"
function checkNombre(valor) {
    if (valor!="" && valor.match(text)) {
        return true;
    }
    return false;
}
// Validar "APELLIDO"
function checkApellido(valor) {
    if (valor!="" && valor.match(text)) {
        return true;
    }
    return false;
}
// Validar "TELÉFONO"
function checkTelefono(valor) {
    if (valor!="" && valor.match(phone)) {
        return true;
    }
    return false;
}
// Validar "CORREO"
function checkCorreo(valor) {
    if (valor!="" && valor.match(mail)) {
        return true;
    }
    return false;
}
// Validar "CONTRASEÑA"
function checkContrasena(valor) { 
    if (valor!="" && valor.match(pass)) {
        return true;
    }
    return false;
}
// Variables globales
module.exports.checkNombre = checkNombre;
module.exports.checkApellido = checkApellido;
module.exports.checkTelefono = checkTelefono;
module.exports.checkCorreo = checkCorreo;
module.exports.checkContrasena = checkContrasena;
