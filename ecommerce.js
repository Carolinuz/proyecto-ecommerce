// const botonUsuario = document.querySelector('#btn-enviar-u');
// const botonListUsuario = document.querySelector('#btn-listado-u');
const botonEnviarPr = document.querySelector('#btn-enviar-pr');
const botonListadoPr = document.querySelector('#btn-listado-pr');
const tablaListado = document.querySelector('#tabla-listado');
const lista = document.getElementById('lista');
const agregarCarrito = document.getElementById('agregar-carrito');

class Usuario {
    constructor(nombre, apellido, email, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.tel = telefono;
    }
}

var users = [];

// botonUsuario.onclick = (function() {
//     nombre = document.querySelector('#nombre');
//     apellido = document.querySelector('#apellido');
//     email = document.querySelector('#email');
//     tel = document.querySelector('#telefono');
//     let user = new Usuario(nombre.value, apellido.value, email.value, tel.value);
//     users.push(user);
//     nombre.value = '';
//     apellido.value = '';
//     email.value = '';
//     tel.value = '';
//     return false;
// });

// botonListUsuario.onclick = (function() {
//     for(let i = 0; i < users.length; i++){
//     document.querySelector('#list-usuarios').outerHTML += `<h2>${users[i].nombre} ${users[i].apellido}</h2>`;
//     }
//     return false;
// });

let productos = [
    {
        descripcion: 'Torta de Fresas',
        precio: 100,
        imagen: "https://tortasypasteles.com/wp-content/uploads/2019/12/torta-de-fresas.jpg",
    },
    {
        descripcion: 'Torta Foto',
        precio: 200,
        imagen: "https://data.pixiz.com/output/user/frame/preview/api/big/4/4/6/8/1008644_290b4.jpg",
    },
    {
        descripcion: 'Budín de Limón',
        precio: 300,
        imagen: "https://www.mateargentino.info/fotos/paginas/torta-rapida.jpg",
    },
    {
        descripcion: 'Torta Mousse',
        precio: 200,
        imagen: "https://source.unsplash.com/kPxsqUGneXQ/400x300"
    },
    {
        descripcion: 'Drip Cake',
        precio: 600,
        imagen: "https://source.unsplash.com/vdx5hPQhXFk/400x300"
    },
    {
        descripcion: 'Torta Arcoiris',
        precio: 360,
        imagen: "https://source.unsplash.com/YpIKbBZtSWY/400x300"
    },
    
   ];

function mostrarProductos () {
    for(let i = 0; i < productos.length; i++){
    document.querySelector('#list-productos').outerHTML += `<div class="card" style="width: 25rem;"><img class="card-img-top" src="${productos[i].imagen}" alt="Card image cap"><div class="card-body"><h3 class="card-title">${productos[i].descripcion}</h3><p class="card-text">Precio: ${productos[i].precio}</p><a href="#" class="btn btn-secondary boton-carrito">Agregar al carrito</a>`;
    }
    return false;
};

mostrarProductos();
let carrito = [];
agregarCarrito.addEventListener("click", comprarCarrito);

function comprarCarrito (e) {
    e.preventDefault();
    if(e.target.classList.contains('boton-carrito')){
        const product = e.target.parentElement.parentElement;
        this.leerDatosProducto(product);
    }

}

const carro = new carrito()





// class Productos {
//     constructor(nombrePr, precioPr) {
//         this.nombrePr = nombrePr;
//         this.precioPr = precioPr;
//     }
// }

// var listadoPr = [];

// botonEnviarPr.onclick = (function(e) {
//     nombrePr = document.querySelector('#nombre-pr');
//     precioPr = document.querySelector('#precio-pr');
//     let product = new Productos(nombrePr.value, precioPr.value);
//     listadoPr.push(product);
//     nombrePr.value = '';
//     precioPr.value = '';
//     e.preventDefault();
// });

// botonListadoPr.onclick = (function(e) {
    
//     for(let i = 0; i < listadoPr.length; i++) {
//         let itemListado = `Nombre: ${listadoPr[i].nombrePr} Precio: ${listadoPr[i].precioPr}`
//         let li = document.createElement('li');
//         li.innerText = itemListado;
//         lista.appendChild(li);
//     }
//     e.preventDefault();
//     return false;
// });

