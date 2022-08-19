export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    protected abstract template(modelo: T): string;

    public update(modelo: T): void {
        this.elemento.innerHTML = this.template(modelo);
    }

}