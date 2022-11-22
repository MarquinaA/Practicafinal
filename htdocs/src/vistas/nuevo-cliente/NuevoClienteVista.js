import Vista from "../Vista.js";

// extendemos a Vista y utilizamos y sobreescribimos sus métodos
export default class extends Vista {
    constructor() {
        super()
        this.setTitulo("Nuevo Cliente")
    }

    async getHTML() {
        super.getHTML("/nuevo-cliente/nuevo-cliente.html", "/nuevo-cliente/nuevo-cliente.js")
    }
}