let name = "";

module.exports = {
  setName: arg => {
    name = arg;
  },
  sayHello: () => {
    console.log(`Hello, I'm ${name}`);
  }
};
