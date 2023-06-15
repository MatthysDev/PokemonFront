

export function formatDate(date) {
    const dateObject = new Date(date);
    return dateObject.toLocaleString('fr').split(' ')[0];
}