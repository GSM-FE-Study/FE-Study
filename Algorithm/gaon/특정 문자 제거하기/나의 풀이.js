const solution = (my_string, letter) =>
  [...my_string].filter((s) => s !== letter).join("");
