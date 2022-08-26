export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
        const retorno = metodoOriginal.apply(this, args);
        console.log(`--- Método ${propertyKey}`);
        console.log(`------ paramêtros: ${JSON.stringify(args)}`);
        console.log(`------ retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    }
    return descriptor;
}