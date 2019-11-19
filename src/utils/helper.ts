export const capitalize = (str: string) =>
  String(str)
    .charAt(0)
    .toUpperCase() + str.substring(1);
