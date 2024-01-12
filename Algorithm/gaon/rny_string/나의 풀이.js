const solution = (rny_string) => {
  const string = [...rny_string].map((i) => (i === "m" ? "rn" : i)).join("");

  return string;
};
