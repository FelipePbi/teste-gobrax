export const formatMask = (mask: string, value: string | number) => {
  const string = String(value).replace("-", "");
  let result = "";

  for (let im = 0, is = 0; im < mask.length && is < string.length; im++) {
    result += mask.charAt(im) == "X" ? string.charAt(is++) : mask.charAt(im);
  }

  return result;
};
