export function mostrarTempoDeExecucao(emSegundos: boolean = true) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        let divisor = 1000;
        let unidade = "segundos";
        if (!emSegundos) {
            divisor = 1;
            unidade = "milisegundos";
        }
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Tempo de execução de '${propertyKey}': ${(t2-t1)/divisor} ${unidade}`);
            return retorno;
        }
        return descriptor;
    }
}