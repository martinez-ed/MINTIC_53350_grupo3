let registros = [];

function agregarRegistro(){
    function objeto(nombre, apellido, telefono, correo, contrasena){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.contrasena = contrasena;
    }
    var objetoNombre = document.getElementById("nombre").value;
    var objetoApellido = document.getElementById("apellido").value;
    var objetoTelefono = document.getElementById("telefono").value;
    var objetoCorreo = document.getElementById("correo").value;
    var objetoContrasena = document.getElementById("contrasena").value;
    arreglo = new objeto (objetoNombre, objetoApellido, objetoTelefono, objetoCorreo, objetoContrasena);
    registros.push(arreglo);
    console.log(registros);


}

function ordenarArreglo(arreglo){
    registros.sort((a, b) => {
        const apellidoA = a.apellido.toLowerCase();
        const apellidoB = b.apellido.toLowerCase();
        if (apellidoA < apellidoB) {
            return -1;
        }
        if (apellidoA > apellidoB) {
            return 1;
        }
        return 0;
    });
    console.log(registros);
    return registros;
}

function filtrarCorreo(arreglo){
    var correosFiltrados = registros.filter(function(x) {
        return x.correo.includes("gmail.com")
    });
    console.log(correosFiltrados);
    return correosFiltrados;
}

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.filtrarCorreo = filtrarCorreo;