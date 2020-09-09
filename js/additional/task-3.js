// == task-3 == //
// Створити обєкт піци з полями і методами
// В обєкті має бути такі поля і методи:

// поле для збереження розміру піци
// поле для збереження списку добавок
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
// Створити всі методи і перевірити чи вони працюють

const SIZES = {
  BIG: { price: 25, cal: 100, time: 15 },
  SMALL: { price: 15, cal: 50, time: 7 },
  MEDIUM: { price: 15, cal: 50, time: 7 },
};
const STUFFING = {
  CHEESE: { price: 6.5, cal: 45, time: 2 },
  BEACON: { price: 10, cal: 70, time: 6 },
  TOMATO: { price: 12.1, cal: 4, time: 5 },
  CHICKEN: { price: 9.3, cal: 30, time: 5.1 },
};
const SAUCES = {
  MUSTARD: { price: 3, cal: 5, time: 1 },
  KETCHUP: { price: 4.2, cal: 20, time: 1.5 },
  BOLOGNESE: { price: 7.5, cal: 50, time: 3 },
};
const pizza = {
  size: {},
  stuffing: {},
  sauces: {},

  chooseSize(size) {
    // метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
    const choosenSize = size.toUpperCase();
    if (Object.keys(SIZES).includes(choosenSize)) {
      this.size[choosenSize] = SIZES[choosenSize];
      return console.log(`Вы выбрали ${choosenSize} размер пиццы`);
    }
    return console.log("Нет такого размера");
  },
  addStuffing(stuffing) {
    // метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати помилку)
    const choosenStuffing = stuffing.toUpperCase();
    if (!Object.keys(this.stuffing).includes(choosenStuffing)) {
      if (Object.keys(STUFFING).includes(choosenStuffing)) {
        this.stuffing[choosenStuffing] = STUFFING[choosenStuffing];
        return console.log(`Вы добавили ${choosenStuffing} в пиццу`);
      } else return console.log("Нет такой добавки");
    } else return console.log("Такая добавка уже есть");
  },
  deleteStuffing(stuffing) {
    // метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку,
    // також показувється якщо пробуємо видалити добавку, а там ще жодної немає)
    const choosenStuffing = stuffing.toUpperCase();
    if (Object.keys(this.stuffing).length > 0) {
      if (Object.keys(this.stuffing).includes(choosenStuffing)) {
        delete this.stuffing[choosenStuffing];
        return console.log(`Вы убрали ${choosenStuffing} из пиццы`);
      } else return console.log("Нет такой добавки");
    } else return console.log("В пицце нет добавок");
  },
  addSauce(sauce) {
    // метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати помилку)
    const choosenSauce = sauce.toUpperCase();
    if (!Object.keys(this.sauces).includes(choosenSauce)) {
      if (Object.keys(SAUCES).includes(choosenSauce)) {
        this.sauces[choosenSauce] = SAUCES[choosenSauce];
        return console.log(`Вы добавили ${choosenSauce} в пиццу`);
      } else return console.log("Нет такого соуса");
    } else return console.log("Такой соус уже есть");
  },
  deleteSauce(sauce) {
    // метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку,
    // також показувється якщо пробуємо видалити соус, а там ще жодного немає)
    const choosenSauce = sauce.toUpperCase();
    if (Object.keys(this.sauces).length > 0) {
      if (Object.keys(this.sauces).includes(choosenSauce)) {
        delete this.sauces[choosenSauce];
        return console.log(`Вы убрали ${choosenSauce} из пиццы`);
      } else return console.log("Нет такого соуса");
    } else return console.log("В пицце нет соусов");
  },
  totalPrice() {
    //   метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
    let totalPrice = Object.values(this.size)[0].price;
    for (const stuffing in this.stuffing) {
      totalPrice += this.stuffing[stuffing].price;
    }
    for (const sauces in this.sauces) {
      totalPrice += this.sauces[sauces].price;
    }
    totalPrice = Math.round(totalPrice * 100) / 100;
    console.log(`Сумма заказа - ${totalPrice}$`);
    return totalPrice;
  },
  totalCalories() {
    // метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
    let totalCalories = Object.values(this.size)[0].cal;
    for (const stuffing in this.stuffing) {
      totalCalories += this.stuffing[stuffing].cal;
    }
    for (const sauces in this.sauces) {
      totalCalories += this.sauces[sauces].cal;
    }
    totalCalories = Math.round(totalCalories);
    console.log(`Всего калорий - ${totalCalories}`);
    return totalCalories;
  },
  totalTime() {
    // метод що показує час приготуванни в хвилинах в залежності від складності піци
    let totalTime = Object.values(this.size)[0].time;
    for (const stuffing in this.stuffing) {
      totalTime += this.stuffing[stuffing].time;
    }
    for (const sauces in this.sauces) {
      totalTime += this.sauces[sauces].time;
    }
    totalTime = Math.round(totalTime);
    console.log(`Время на приготовление - ${totalTime} минут`);
    return totalTime;
  },
  isValid() {
    // Метод валідації піци який поверне true якщо піца відповідає вимогам ,
    // а саме(вибраний розмір піци, є мінімум одна добавка, і мінімум один соус)
    // інакше false(І виводить строку чого не вистачає(коржа, добавки, чи соусу))
    if (Object.keys(this.size).length > 0) {
      if (Object.keys(this.stuffing).length > 0) {
        if (Object.keys(this.sauces).length > 0) {
          return true;
        } else {
          console.log("Не выбран соус");
          return false;
        }
      } else {
        console.log("Не выбрана добавка");
        return false;
      }
    } else {
      console.log("Не выбран размер пиццы");
      return false;
    }
  },
  orderInfo() {
    // метод який показує загальну інформацію про замовлення
    // (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
    if (this.isValid()) {
      return console.log(
        this.totalPrice(),
        this.totalCalories(),
        this.totalTime(),
        { ...[...Object.keys(this.stuffing), ...Object.keys(this.sauces)] }
      );
    } else return console.log("Не валидный заказ");
  },
};
pizza.chooseSize("big");
pizza.addStuffing("cheese");
pizza.addStuffing("tomato");
pizza.addStuffing("chicken");
pizza.addSauce("ketchup");
pizza.addSauce("mustard");
pizza.orderInfo();
