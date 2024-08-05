export function formatCurrency(priceCents) {
    return (priceCents/100).toFixed(2);

}

/* can only do one of this in a file */

export default formatCurrency
