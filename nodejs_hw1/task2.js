/*
  2. Сделайте так, чтоб модуль person из первого задания можно было зареквайрить без указания относительного пути
  2*. Можете попробовать сделать это двумя способами (подсказка - через package.json)
 */

const person = require("person"); // такой require должен работать

person.setName("Petya");
person.sayHello(); // здесь в консоль должно вывестись Hello, I'm Petya
console.log(person.name); // здесь должно быть undefined

//с package.json не получилось, к сожалению...
