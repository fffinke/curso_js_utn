/**
 * Tipos de plato de la carta.
 */
class TIPO_PLATO {
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

/**
 * Platos de la carta.
 */
class PLATO {
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

/**
 * Pedidos realizados por los clientes.
 */
class PEDIDO {
    constructor(a_nombre_cliente) {
        this._nombre_cliente = a_nombre_cliente;
        this._fecha_hora = new Date();
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

const tipo_entrada = new TIPO_PLATO("Entrada");
const tipo_principal = new TIPO_PLATO("Principal");
const tipo_postre = new TIPO_PLATO("Postre");
var entrada_1 = new PLATO("papas fritas",4.70,tipo_entrada);
var entrada_2 = new PLATO("rabas",4.70,tipo_entrada);
var plato_1 = new PLATO("milanesa",9.50,tipo_principal);
var plato_2 = new PLATO("tallarines",8.90,tipo_principal);
var plato_3 = new PLATO("ravioles",11.75,tipo_principal);
var plato_4 = new PLATO("lomo",19.20,tipo_principal);
var postre_1 = new PLATO("Helado",14.30,tipo_postre);
var postre_2 = new PLATO("Panqueque",8.30,tipo_postre);
var postre_3 = new PLATO("Ensalada de Frutas",12.40,tipo_postre);
var pedido_1 = new PEDIDO("Martin");
pedido_1.agregar_plato(plato_1);
pedido_1.agregar_plato(plato_2);
//pedido_1.quitar_plato(plato_1);
console.log(pedido_1.platos);
console.log(pedido_1.precio());