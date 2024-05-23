var productos = [];

// Función para mostrar la lista de productos
function mostrarProductos() {
    var listaProductos = document.getElementById("lista-productos");
    listaProductos.innerHTML = "";
    productos.forEach(function(producto, index) {
        var li = document.createElement("li");
        li.textContent = `Producto ${index + 1}: ${producto.nombre} (Unidades disponibles: ${producto.unidades})`;
        listaProductos.appendChild(li);
        var btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = function() {
            eliminarProducto(index);
        };
        li.appendChild(btnEliminar);
    });
}

// Función para registrar un nuevo producto
document.getElementById("formulario-producto").addEventListener("submit", function(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var unidades = parseInt(document.getElementById("unidades").value);
    if (nombre && unidades) {
        var nuevoProducto = {
            nombre: nombre,
            unidades: unidades
        };
        productos.push(nuevoProducto);
        mostrarProductos();
        document.getElementById("formulario-producto").reset();
    }
});

// Función para eliminar un producto
function eliminarProducto(index) {
    if (index >= 0 && index < productos.length) {
        productos.splice(index, 1);
        mostrarProductos();
    }
}