function hide_numbers(s) {
  var num = s.slice(s.length - 4, s.length);
  var hide = "*".repeat(s.length - 4);
  var result = hide + num;
  return result;
}
