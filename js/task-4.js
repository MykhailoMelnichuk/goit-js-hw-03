console.log('Задание 4');

function countTotalSalary(obj) {
    const values = Object.values(obj);
    let sumSalary = 0;
  
    for (let value of values) {
      sumSalary += value;
    }
    return sumSalary;
}

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400