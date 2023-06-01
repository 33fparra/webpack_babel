import {Proveedor} from '../src/clases/Proveedor'
import {Articulo} from '../src/clases/Articulo'


  

// Crear una instancia de Artículo
const articulo1 = new Articulo("Artículo 1", "email@example.com", "123456789");
console.log(articulo1)
console.log("Inicio")

// Crear una instancia de Proveedor
const proveedor1 = new Proveedor("Proveedor 1", articulo1, 1000);
console.log(proveedor1.getInfoProveedor());

//funcion para calcular el IVA Recuerda que si precio = 0 >> impuesto es = 0
function calcularImpuestoTotal(proveedor1) {
    if(proveedor1.precio === 0){
        return 'No hay impuestos.'
    }else{
        const impuesto = proveedor1.precio * 0.19; 
        return `El impuesto es $ ${impuesto}`;
    }
  
  }
console.log(calcularImpuestoTotal(proveedor1));
