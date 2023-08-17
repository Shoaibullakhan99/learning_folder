function capitalize(str) {
  let result = "";
  let ch = " ";

  for (let i = 0; i < str.length; i++) {
    if (ch == " " && str.charAt(i) !== " ") {
      result += str.charAt(i).toUpperCase();
    } else {
      result += str.charAt(i);
    }
    ch = str.charAt(i);
  }
  return result.trim();
}

let str = "geeks for geeks";
console.log(capitalize(str));
