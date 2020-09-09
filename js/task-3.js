// Напиши функцию findBestEmployee(employees), которая принимает
// объект сотрудников и возвращает имя самого продуктивного
//     (который выполнил больше всех задач).Сотрудники и кол - во
// выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач".

const findBestEmployee = function (employees) {
  // const workResult = Object.values(employees);
  // const nameEmpl = Object.keys(employees);
  // let bestEmpl = nameEmpl[workResult.indexOf(Math.max(...workResult))];
  // return bestEmpl;
  let maxResult = Object.values(employees)[0];
  let nameEmpl = Object.keys(employees)[0];
  for (const key in employees) {
    if (maxResult <= employees[key]) {
      maxResult = employees[key];
      nameEmpl = key;
    }
  }
  return nameEmpl;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
