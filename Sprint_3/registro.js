// Función para capturar la información del formulario
function agregarRegistro() {
    // Constructor
    function capturas(nombre,apellido,telefono,correo,contrasena) {
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
    captura = new capturas(a,b,c,d,e);
    console.log(captura);
    contenedor();
}

// Array con información consignada en formulario
var arrayCampos = [];
// Función que contendrá el arreglo
function contenedor() {
    arrayCampos.push(captura);
    console.log(arrayCampos);
}

//Para Ordenar: "registro" o funtion.sort("apellido")
    
    function ordenarArreglo(){
    contenedor.short([b]);
    }

// Exportar las funciones
module.exports = { agregarRegistro, ordenarArreglo, filtrarCorreo }