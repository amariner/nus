export default function priceFormat(price) {
  const priceFloat = (price / 100).toFixed(2)
  return Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(priceFloat)
}
