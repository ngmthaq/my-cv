export function isValidNumber(value) {
  return Boolean(value) && typeof value === "number" && !Number.isNaN(value);
}
