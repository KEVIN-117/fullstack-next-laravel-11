export function currencyFormatter(value: string): string {
    // format in Bs of bolivia currency
    return new Intl.NumberFormat("es-BO", {
        style: "currency",
        currency: "BOB",
    }).format(Number(value));
}