export const formatCurrency = (current: number): string => {
  return current.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
};
