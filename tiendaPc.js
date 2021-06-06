class DispositivoEntrada{

    constructor(tipoDeEntrada,marca){
        this._tipoDeEntrada=tipoDeEntrada;
        this._marca=marca;
    }
    get tipoDeEntrada(){
        return this._tipoDeEntrada;
    }
    set tipoDeEntrada(tipoDeEntrada){
        this._tipoDeEntrada=tipoDeEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca=marca;
    }
    toString(){
        return `Tipo de entrada: ${this._tipoDeEntrada}, Marca: ${this._marca}`;
    }
    
}

class Mouse extends DispositivoEntrada{

    static contadorRaton=0;

    constructor(tipoDeEntrada,marca){
        super (tipoDeEntrada,marca);
        this._idRaton=++Mouse.contadorRaton;
    }
    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [${super.toString()}, ID mouse:  ${this._idRaton}]`;
    }
}



class Teclado extends DispositivoEntrada{
   
    static contadorTeclado=0;

    constructor(tipoDeEntrada,marca){
        super (tipoDeEntrada,marca);
        this._idTeclado=++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [${super.toString()}, ID teclado:  ${this._idTeclado}]`;
    }
}



class Monitor{

    static contadorMonitor=0;

    constructor(marca,tamaño){
        this._marca=marca;
        this._tamaño=tamaño;
        this._idMonitor=++Monitor.contadorMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca=marca;
    }
    set tamaño(tamaño){
        this._tamaño=tamaño;
    }
    get tamaño(){
        return this._tamaño;
    }
    toString(){
        return `Monitor: [ID monitor ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
    }
}

let mouse1 = new Mouse("usb","Hyper");
console.log(mouse1.toString());
let mouse2 = new Mouse("cable","dell");
console.log(mouse2.toString());

let teclado1 = new Teclado("bluetooth","amd")
console.log(teclado1.toString());
let teclado2 = new Teclado("usb","acceso");
console.log(teclado2.toString());


let monitor1=new Monitor("lenovo",15);
console.log(monitor1.toString());
let monitor2=new Monitor("LG",40);
console.log(monitor2.toString());

class Computadora{

    static contadorComputadora=0;

    constructor(nombre,monitor,teclado,raton){
        this._idComputadora=++Computadora.contadorComputadora;
        this._nombre=nombre;
        this._monitor=monitor;
        this._teclado=teclado;
        this._raton=raton;
    }
    toString(){
        //se muestran autocamente
        return `Computadora: ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._raton}`;
    }
}

let Computadora1= new Computadora("HP",mouse1,teclado1,monitor1);
console.log(`${Computadora1}`);

let Computadora2= new Computadora("Armada",mouse2,teclado2,monitor2);
console.log(`${Computadora2}`);

class Orden{

    static contarOrden=0;

    constructor(){
        this._idOrden=++Orden.contarOrden;
        this._computadora=[];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadora.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden='';
        for(let computadora of this._computadora){
            computadorasOrden+=`\n ${computadora}`;
        }
        console.log(`Orden ${this._idOrden} computadora ${computadorasOrden}`)
    }


}

let orden1 =new Orden();
orden1.agregarComputadora(Computadora1);
orden1.agregarComputadora(Computadora2);
orden1.agregarComputadora(Computadora1);

orden1.mostrarOrden();

let orden2=new Orden();
orden2.agregarComputadora(Computadora2);
orden2.agregarComputadora(Computadora1);
orden2.agregarComputadora(Computadora2);

orden2.mostrarOrden();