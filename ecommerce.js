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
// {
//     id: 4,
//     nombre: 'Fresas',
//     precio: 0.6,
//     imagen: 'fresas.jpg'
// }
let $items = document.querySelector('#items');
let carrito1 = [];
let total = 0;
let $carrito = document.querySelector('#carrito');
let $total = document.querySelector('#total');
let $botonVaciar = document.querySelector('#boton-vaciar');

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
               miNodoBoton.addEventListener('click', aniadirCarrito);
               // Insertamos
               miNodoCardBody.appendChild(miNodoImagen);
               miNodoCardBody.appendChild(miNodoTitle);
               miNodoCardBody.appendChild(miNodoPrecio);
               miNodoCardBody.appendChild(miNodoBoton);
               miNodo.appendChild(miNodoCardBody);
               $items.appendChild(miNodo);
    }
}

    function aniadirCarrito(){
        carrito1.push(this.getAttribute('id'));
        // let itemLista = document.createElement('li');
        // itemLista.textContent = prod.descripcion;
        // calcularTotal();
        console.log(carrito1);
        // $carrito.appendChild(itemLista);
        
    }
    

    // function renderizarCarrito() {
    //     // Vaciamos todo el html
    //     $carrito.textContent = '';
    //     // Quitamos los duplicados
    //     let carritoSinDuplicados = [...new Set(carrito)];
    //     // Generamos los Nodos a partir de carrito
    //     carritoSinDuplicados.forEach(function (item, indice) {
    //         // Obtenemos el item que necesitamos de la variable base de datos
    //         let miItem = baseDeDatos.filter(function(itemBaseDatos) {
    //             return itemBaseDatos['id'] == item;
    //         });
    //         // Cuenta el número de veces que se repite el producto
    //         let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
    //             return itemId === item ? total += 1 : total;
    //         }, 0);
    //         // Creamos el nodo del item del carrito
    //         let miNodo = document.createElement('li');
    //         miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
    //         miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} - ${miItem[0]['precio']}€`;
    //         // Boton de borrar
    //         let miBoton = document.createElement('button');
    //         miBoton.classList.add('btn', 'btn-danger', 'mx-5');
    //         miBoton.textContent = 'X';
    //         miBoton.style.marginLeft = '1rem';
    //         miBoton.setAttribute('item', item);
    //         miBoton.addEventListener('click', borrarItemCarrito);
    //         // Mezclamos nodos
    //         miNodo.appendChild(miBoton);
    //         $carrito.appendChild(miNodo);
    //     })
    // }

    // function calcularTotal() {
    //     // Limpiamos precio anterior
    //     total = 0;
    //     // Recorremos el array del carrito
    //     for (let item of carrito) {
    //         // De cada elemento obtenemos su precio
    //         let miItem = baseDeDatos.filter(function(itemBaseDatos) {
    //             return itemBaseDatos['id'] == item;
    //         });
    //         total = total + miItem[0]['precio'];
    //     }
    //     // Formateamos el total para que solo tenga dos decimales
    //     let totalDosDecimales = total.toFixed(2);
    //     // Renderizamos el precio en el HTML
    //     $total.textContent = totalDosDecimales;
    // }

renderItems();

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
}
