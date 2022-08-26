import { inspect } from "../decorators/inspect.js";
import { mostrarTempoDeExecucao } from "../decorators/mostrar-tempo-de-execucao.js";

export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string,
            private escapar: boolean = false) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLInputElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM.`);
        }
    }

    protected abstract template(modelo: T): string;

    @inspect
    @mostrarTempoDeExecucao()
    public update(modelo: T): void {
        let template = this.template(modelo);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

}