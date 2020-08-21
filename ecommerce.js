window.onload = function () {

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
        id: 1,
        descripcion: 'Torta 1',
        precio: 100,
        imagen: "https://tortasypasteles.com/wp-content/uploads/2019/12/torta-de-fresas.jpg",
    },
    {
        id: 2,
        descripcion: 'Torta 2',
        precio: 200,
        imagen: "https://data.pixiz.com/output/user/frame/preview/api/big/4/4/6/8/1008644_290b4.jpg",
    },
    {
        id: 3,
        descripcion: 'Torta 3',
        precio: 300,
        imagen: "https://www.mateargentino.info/fotos/paginas/torta-rapida.jpg",
    },
    {
        id: 4,
        descripcion: 'Torta 4',
        precio: 200,
        imagen: "https://source.unsplash.com/kPxsqUGneXQ/400x300"
    },
    {
        id: 5,
        descripcion: 'Torta 5',
        precio: 600,
        imagen: "https://source.unsplash.com/vdx5hPQhXFk/400x300"
    },
    {
        id: 6,
        descripcion: 'Torta 6',
        precio: 360,
        imagen: "https://source.unsplash.com/YpIKbBZtSWY/400x300"
    },
    
   ];

// function mostrarProductos () {
//     for(let i = 0; i < productos.length; i++){
//     document.querySelector('#list-productos').outerHTML += `<div class="card" style="width: 25rem;"><img class="card-img-top" src="${productos[i].imagen}" alt="Card image cap"><div class="card-body"><h5 class="card-title">${productos[i].descripcion}</h5><p class="card-text">Precio: ${productos[i].precio}</p><a href="#" class="btn btn-primary boton-carrito">Agregar al carrito</a>`;
//     }
//     return false;
// };

// mostrarProductos();
// let carrito = [];
// agregarCarrito.addEventListener("click", comprarCarrito);

// function comprarCarrito () {

// }

let $items = document.querySelector('#items');
let carrito1 = [];
let total = 0;
let $carrito = document.querySelector('#carrito');

function renderItems(){
    for(let info of productos){
               // Estructura
               let miNodo = document.createElement('div');
               miNodo.classList.add('card', 'col-sm-2');
               // Body
               let miNodoCardBody = document.createElement('div');
               miNodoCardBody.classList.add('card-body');
               // Titulo
               let miNodoTitle = document.createElement('h5');
               miNodoTitle.classList.add('card-title');
               miNodoTitle.textContent = info['descripcion'];
               // Imagen
               let miNodoImagen = document.createElement('img');
               miNodoImagen.classList.add('img-fluid');
               miNodoImagen.setAttribute('src', info['imagen']);
               // Precio
               let miNodoPrecio = document.createElement('p');
               miNodoPrecio.classList.add('card-text');
               miNodoPrecio.textContent = '$' + info['precio'];
               // Boton 
               let miNodoBoton = document.createElement('button');
               miNodoBoton.classList.add('btn', 'btn-secondary');
               miNodoBoton.textContent = 'Agregar al carrito';
               miNodoBoton.setAttribute('id', info['id']);
               miNodoBoton.addEventListener('click', llenarCarrito);
               // Insertamos
               miNodoCardBody.appendChild(miNodoImagen);
               miNodoCardBody.appendChild(miNodoTitle);
               miNodoCardBody.appendChild(miNodoPrecio);
               miNodoCardBody.appendChild(miNodoBoton);
               miNodo.appendChild(miNodoCardBody);
               $items.appendChild(miNodo);
    }
}

    function llenarCarrito(){
        let valorId = this.getAttribute('id');
        let objetoSeleccionado = productos.filter(item => item.id == valorId);
        carrito1.push(objetoSeleccionado);
        renderizarCarrito()
    }
    
     function renderizarCarrito() {
    console.log(carrito1);

            let miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            for(let i = 0; i < carrito1.length; i++){
                miNodo.textContent = carrito1[i].descripcion;

            }
     }

renderItems();
}
