function solution(letter) {
  let answer = "";

  let a = letter.split(" ");

  for (let i = 0; i < a.length; i++) {
    if (a[i] == ".-") {
      answer += "a";
    } else if (a[i] == "-...") {
      answer += "b";
    } else if (a[i] == "-.-.") {
      answer += "c";
    } else if (a[i] == "-..") {
      answer += "d";
    } else if (a[i] == ".") {
      answer += "e";
    } else if (a[i] == "..-.") {
      answer += "f";
    } else if (a[i] == "--.") {
      answer += "g";
    } else if (a[i] == "....") {
      answer += "h";
    } else if (a[i] == "..") {
      answer += "i";
    } else if (a[i] == ".---") {
      answer += "j";
    } else if (a[i] == "-.-") {
      answer += "k";
    } else if (a[i] == ".-..") {
      answer += "l";
    } else if (a[i] == "--") {
      answer += "m";
    } else if (a[i] == "-.") {
      answer += "n";
    } else if (a[i] == "---") {
      answer += "o";
    } else if (a[i] == ".--.") {
      answer += "p";
    } else if (a[i] == "--.-") {
      answer += "q";
    } else if (a[i] == ".-.") {
      answer += "r";
    } else if (a[i] == "...") {
      answer += "s";
    } else if (a[i] == "-") {
      answer += "t";
    } else if (a[i] == "..-") {
      answer += "u";
    } else if (a[i] == "...-") {
      answer += "v";
    } else if (a[i] == ".--") {
      answer += "w";
    } else if (a[i] == "-..-") {
      answer += "x";
    } else if (a[i] == "-.--") {
      answer += "y";
    } else if (a[i] == "--..") {
      answer += "z";
    }
  }
  return answer;
}
