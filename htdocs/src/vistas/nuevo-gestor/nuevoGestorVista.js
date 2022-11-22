import Vista from "../Vista.js";

// extendemos a Vista y utilizamos y sobreescribimos sus métodos
export default class extends Vista {
    constructor() {
        super()
        this.setTitulo("Nuevo Gestor")
    }

    async getHTML() {
        super.getHTML("/nuevo-gestor/nuevo-gestor.html", "/nuevo-gestor/nuevo-gestor.js")
    }
}