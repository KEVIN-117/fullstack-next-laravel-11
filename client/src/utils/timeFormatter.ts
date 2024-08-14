export function formatterDate(date: string) {
    // format example dia 1 of august of 2021
    return new Date(date).toLocaleDateString('pt-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}