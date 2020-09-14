const checkForSpam = function (message) {
  message = message.toLowerCase();
  // console.log(message.includes('spam'));
  //   console.log(message.indexOf("spam"));
  //   if (message.includes("spam") || message.includes("sale")) return true;
  //   return false;

  // METHOD 2

  //   if (message.indexOf("spam") >= 0 || message.indexOf("sale") >= 0) return true;
  //     return false;

  // METHOD 3

  // return message.includes("spam") || message.includes("sale") ? true : false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
