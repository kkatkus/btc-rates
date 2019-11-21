export const capitalize = (str: string) =>
  String(str)
    .charAt(0)
    .toUpperCase() + str.substring(1);

export const getLanguage = () => (navigator.languages !== undefined ? navigator.languages[0] : navigator.language);
