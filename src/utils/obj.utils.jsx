export function isObj(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
