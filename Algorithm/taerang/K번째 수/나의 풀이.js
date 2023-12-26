function solution(array, commands) {
  return commands.map((command) => {
    const [i, j, k] = command;
    const answerArray = array
      .slice(i - 1, j)
      .slice()
      .sort((a, b) => a - b);
    return answerArray[k - 1];
  });
}
