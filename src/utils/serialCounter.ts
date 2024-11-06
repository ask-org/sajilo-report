export const SerialCounter = (string: string) => {
  const count = string.split("0").length;
  return count;
};
