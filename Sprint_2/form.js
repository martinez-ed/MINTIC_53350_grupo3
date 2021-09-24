// Validar "NOMBRE"
var txtNombre = /^[a-zA-ZÀ-ÿ\s]{4,30}$/;
function checkNombre(nombre) {
    var NAME = txtNombre.exec(nombre.value);
    if (!NAME || NAME==null || NAME=="") {
        // console.error(nombre.value + ' Falso');
        return false;
    } else {
        // console.log('Verdadero '+ OK[0]);
        return true;
    }
}

// Validar "APELLIDO"
var txtApellido = /^[a-zA-ZÀ-ÿ\s]{4,30}$/;
function checkApellido(apellido) {
    var LASTNAME = txtApellido.exec(apellido.value);
    if (!LASTNAME || LASTNAME==null || LASTNAME=="") {
        // console.error(apellido.value + ' Falso');
        return false;
    } else {
        // console.log('Verdadero '+ OK[0]);
        return true;
    }
}

// Validar "TELÉFONO"
var txtTelefono = /^\d{7}$/;
function checkTelefono(telefono) {
    var PHONE = txtTelefono.exec(telefono.value);
    if (!PHONE || PHONE==null || PHONE=="") {
        // console.error(telefono.value + ' Falso');
        return true;
    } else {
        // console.log('Verdadero '+ OK[0]);
        return false;
    }
}

// Validar "CORREO"
var txtCorreo = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;
function checkCorreo(correo) {
    var EMAIL = txtCorreo.exec(correo.value);
    if (!EMAIL || EMAIL==null || EMAIL=="") {
        // console.error(correo.value + ' Falso');
        return true;
    } else {
        // console.log('Verdadero '+ OK[0]);
        return false;
    }
}

// Validar "CONTRASEÑA"
var txtPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/;
function checkContrasena(contrasena) {
    var PASS = txtPassword.exec(contrasena.value);
    if (!PASS || PASS==null || PASS=="") {
        // console.error(contrasena.value + ' Falso');
        return true;
    } else {
        // console.log('Verdadero '+ OK[0]);
        return false;
    }
}

module.exports = { checkNombre, checkApellido, checkTelefono, checkCorreo, checkContrasena }

// module.exports = checkNombre();
// module.exports = checkApellido();
// module.exports = checkTelefono();
// module.exports = checkCorreo();
// module.exports = checkContrasena();