const findLongestWord = function (string) {
  let arrayWord = string.split(" ");
  //   console.log(arrayWord);
  let longestWord = "";
  for (let word of arrayWord) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
