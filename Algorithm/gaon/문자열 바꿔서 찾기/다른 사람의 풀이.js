function solution(myString, pat) {
  const newPat = [...pat].reduce((acc, cur) => {
    if (cur === "A") {
      acc += "B";
    } else {
      acc += "A";
    }

    return acc;
  }, "");

  return myString.includes(newPat) ? 1 : 0;
}
