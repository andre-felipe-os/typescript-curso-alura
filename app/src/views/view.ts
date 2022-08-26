import { inspect } from "../decorators/inspect.js";
import { mostrarTempoDeExecucao } from "../decorators/mostrar-tempo-de-execucao.js";

export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLInputElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM.`);
        }
    }

    protected abstract template(modelo: T): string;

    public update(modelo: T): void {
        this.elemento.innerHTML = this.template(modelo);
    }

}