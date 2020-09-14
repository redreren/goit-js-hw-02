const calculateEngravingPrice = function (message, pricePerWord) {
  const arr = message.split(` `);
  // console.log(arr);
  const wordQuantity = arr.length;
  //   console.log(wordQuantity);
  const finalPrice = pricePerWord * wordQuantity;
  //   console.log(finalPrice);
  return finalPrice;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
