export class MensagemView {

    private elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    template(modelo: string): string {
        return `
            <p class="alert alert-info">${modelo}</p>
        `;
    }

    update(modelo: string): void {
        this.elemento.innerHTML = this.template(modelo);
    }

}