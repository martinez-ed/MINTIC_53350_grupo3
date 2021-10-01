// Array con información consignada en formulario
let registros = [];

// Función para ordenar el registro por "apellido"
function ordenarArreglo(arreglo) {
    arreglo.sort(function(a, b) {
        let x = a.apellido.toLowerCase();
        let y = b.apellido.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    console.log(arreglo);
}

// Función para filtrar el correo por "gmail"
function filtrarCorreo(){
    const correos =registros.filter(mail => mail.correo === '@gmail.com') 
        return correos === 'gmail';
    };
    console.log(correos);

// Función para capturar la información del formulario
function agregarRegistro() {
    // Constructor
    function datos(nombre,apellido,telefono,correo,contrasena) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.contrasena = contrasena;
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
    // ordenarArreglo(registros);
}

// Función que contendrá el arreglo
function contenedor() {
    registros.push(arreglo);
    ordenarArreglo(registros);
    // console.log(registros);
}

// Exportar las funciones
module.exports.registros = registros;
module.exports.filtrarCorreo = filtrarCorreo;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.agregarRegistro = agregarRegistro;