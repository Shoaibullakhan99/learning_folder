function vowels(word) {
  let lowerWord = word.toLowerCase();
  console.log(lowerWord);
  let ch = lowerWord.split("");
  let ch1 = ch.join("");
  console.log(ch1);
  console.log(ch1[5]);
  console.log(ch1.length);
  console.log(ch);
  let counter = 0;

  console.log(ch[3]);
  for (let i = 0; i < ch1.length; i++) {
    if (
      ch1[i] == "a" ||
      ch1[i] == "e" ||
      ch1[i] == "i" ||
      ch1[i] == "o" ||
      ch1[i] == "u"
    ) {
      counter = counter + 1;
    }
  }
  return counter;
}

console.log(vowels("Language"));
