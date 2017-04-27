class Tipo_Plato {
    constructor(a_nombre) {
        this._nombre = a_nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(a_nombre) {
        this._nombre = a_nombre;
    }
}

class Plato {
    constructor(a_nombre, a_precio, a_tipo_plato) {
        this._nombre = a_nombre;
        this._precio = a_precio;
        this._tipo_plato = a_tipo_plato;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(a_nombre) {
        this._nombre = a_nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(a_precio) {
        this._precio = a_precio;
    }

    get tipo_plato() {
        return this._tipo_plato;
    }

    set tipo_plato(a_tipo_plato) {
        this._tipo_plato = a_tipo_plato;
    }
}

class Pedido {
    constructor(a_nombre_cliente, a_fecha_hora) {
        this._nombre_cliente = a_nombre_cliente;
        this._fecha_hora = a_fecha_hora;
        this._platos = [];
    }

    get nombre_cliente() {
        return this._nombre_cliente;
    }

    get fecha_hora() {
        return this._fecha_hora;
    }

    get platos() {
        return this._platos;
    }

    agregar_plato(a_plato) {
        this.platos.push(a_plato);
    }

    quitar_plato(a_plato) {
        var i = this.platos.indexOf(a_plato);
        this.platos.splice(i, 1);
    }

    precio() {
        var resultado = 0;
        for (var i = 0; i < this.platos.length; i++) {
            resultado = resultado + this.platos[i].precio;
        }
        return resultado;
    }
}

const tipo_entrada = new Tipo_Plato("Entrada");
const tipo_principal = new Tipo_Plato("Principal");
const tipo_postre = new Tipo_Plato("Postre");
var entrada_1 = new Plato("papas fritas",4.70,tipo_entrada);
var entrada_2 = new Plato("rabas",4.70,tipo_entrada);
var plato_1 = new Plato("milanesa",9.50,tipo_principal);
var plato_2 = new Plato("tallarines",8.90,tipo_principal);
var plato_3 = new Plato("ravioles",11.75,tipo_principal);
var plato_4 = new Plato("lomo",19.20,tipo_principal);
var postre_1 = new Plato("Helado",14.30,tipo_postre);
var postre_2 = new Plato("Panqueque",8.30,tipo_postre);
var postre_3 = new Plato("Ensalada de Frutas",12.40,tipo_postre);
var pedido_1 = new Pedido("martin");
pedido_1.agregar_plato(plato_1);
pedido_1.agregar_plato(plato_2);
pedido_1.quitar_plato(plato_1);
console.log(pedido_1.platos);
console.log(pedido_1.precio());