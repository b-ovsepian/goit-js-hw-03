// == task-2 == //
// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. Якщо обєкт пустий то повернути true інакше false

const isObjectEmpty = (object) => {
  console.log(Object.keys(object).length === 0);
};

isObjectEmpty({}); // true
isObjectEmpty({ name: "user", age: 21 }); // false
