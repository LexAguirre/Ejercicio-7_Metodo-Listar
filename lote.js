"use strict";

export default class inventory{
    
    constructor(){
        //this.inventario = new array();
        this.inicio = null;
        this.posicion = 0;
    }

    agregar(nuevo){
        if(this.inicio == null){
            this.inicio = nuevo;
        } else {
            let temp = this.inicio;

            while(temp.siguiente != null){
                temp = temp.siguiente;
            }

            temp.siguiente = nuevo;
        }
    }
 
    buscar(codigo){ 
        
    }

    eliminar() {
        
    }

    listar() {
        
    }    

    listarReverso() {
        
    }    

    intercambioDeElementos(datos, i = 0, j = datos.length -1){
        [datos[i], datos[j]] = [datos[j], datos[i]];
    }
}