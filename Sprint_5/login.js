let registro = [];

// Función que valida el ingreso
function login() {

}

// Función para capturar la información del formulario
function agregarRegistro() {
    // Constructor
    class datos {
        constructor(nombre, apellido, telefono, correo, contrasena) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.telefono = telefono;
            this.correo = correo;
            this.contrasena = contrasena;
        }
    }
    // Capturar valores
    var a = document.getElementById("nombre").value;
    var b = document.getElementById("apellido").value;
    var c = document.getElementById("telefono").value;
    var d = document.getElementById("correo").value;
    var e = document.getElementById("contrasena").value;
    // Crear el nuevo objeto
    arreglo = new datos(a,b,c,d,e);
    contenedor();
}
// Función que contendrá el arreglo
function contenedor() {
    registros.push(arreglo);
    // ordenarArreglo(registros);
    console.log(registros);
}

// Función que valida el captcha
function validarCAPTCHA(valor) {

}

// Exportar las funciones
module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;