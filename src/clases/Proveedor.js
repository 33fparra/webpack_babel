import {Articulo} from './Articulo'

export class Proveedor {
    constructor(nombre, articulo, precio) {
      this.nombre = nombre;
      this.articulo = articulo;
      this.precio = precio;
    }
  
    getInfoProveedor() {
      return `Proveedor: ${this.nombre}, Articulo: ${this.articulo}, Precio: ${this.precio}`;
    }
  }



// export class Carrito{
//     productos

//     constructor(){
//         this.productos = []
//     }

//     agregarProducto(producto){
//         this.productos.push(producto)
//     }
//     mostrarProductos(){
//         if(this.productos.length === 0){
//             console.log("El carrito esta vacio")
//             return
//         }
//         console.log('Los Productos en el carro son: ')
//         for(let producto of this.productos) {
//             producto.imprimirProducto()
//         }
//     }

//     calcularTotal(){
//         let total = 0;
//         this.productos.forEach(producto =>{
//             total = total + producto.precio * producto.cantidad
//         })
//     }
// } 