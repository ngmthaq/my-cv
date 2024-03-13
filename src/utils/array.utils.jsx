export function isArray(value) {
  return Boolean(value) && typeof value === "object" && Array.isArray(value);
}

export function createFromNumber(number) {
  if (!number) throw new Error("Invalid number");
  if (number < 0) throw new Error("Number must be equal or greater than 0");
  const array = [];
  for (let index = 0; index < number; index++) array.push(index);
  return array;
}
