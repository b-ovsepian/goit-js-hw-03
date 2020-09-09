// Напиши скрипт управления личным кабинетом
// интернет банка.Есть объект account в котором необходимо
// реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = {};
    if (type === Transaction.DEPOSIT || type === Transaction.WITHDRAW) {
      transaction.type = type;
    } else {
      return;
    }
    transaction.amount = amount;
    transaction.id = this.transactions.length + 1;
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    return console.log(`На Ваш счет успешно внесено ${amount}$`);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW)
      );
      return console.log(`Вы успешно сняли ${amount}$`);
    } else return alert("Cнятие такой суммы не возможно, недостаточно средств");
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return console.log(`На Вашем счету: ${this.balance}$`);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return console.log(this.transactions[id - 1]);
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        total += transaction.amount;
      }
    }
    return console.log(`Количество средств по типу транзакции: ${total}$`);
  },
};

console.log(account.createTransaction(19, "withdraw"));
account.deposit(228);
account.withdraw(19);
account.withdraw(22);
account.withdraw(44);
account.getBalance();
account.getTransactionDetails(3);
account.getTransactionTotal("withdraw");
