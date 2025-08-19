export const formatPrice = (price: number, currency: "CZK" = "CZK") => {
    return new Intl.NumberFormat("cs-CZ", {
        style: "currency",
        currency
    }).format(price);
}