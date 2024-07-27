export function formatPhoneNumber(value: string) {
  value = value.replace(/\D/g, "");

  value = value.substring(0, 11);

  if (value.length > 0) {
    value = "(" + value;
  }
  if (value.length > 3) {
    value = value.substring(0, 3) + ") " + value.substring(3);
  }
  if (value.length > 10) {
    value = value.substring(0, 10) + "-" + value.substring(10);
  }

  return value;
}
