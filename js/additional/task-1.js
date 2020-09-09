// == task-1 == //
// Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару)
// Ця ф - я має повернути ціну замовлення
const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 };
const orderA = { apple: 5, cheese: 1, bread: 3 }; //100+12+69 = 181
const orderB = { orange: 10, pork: 2, bread: 1 }; //50+90+23 = 163

const givePrice = function (order, priceList) {
  const orderArr = Object.entries(order);
  const priceArr = Object.entries(priceList);
  let totalSum = 0;
  for (let index = 0; index < orderArr.length; index++) {
    for (const priceProduct of priceArr) {
      if (orderArr[index][0] === priceProduct[0]) {
        totalSum += orderArr[index][1] * priceProduct[1];
      }
    }
  }
  return console.log(`Сумма заказа - ${totalSum}$`);
};

givePrice(orderA, productsPrice);
givePrice(orderB, productsPrice);
