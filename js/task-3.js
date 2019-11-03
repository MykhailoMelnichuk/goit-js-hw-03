console.log('Задание 3');

const findBestEmployee = function(employees) {
    let name;
    let maxTask = 0;
   
    const keys = Object.keys(employees);
   
    for (let key of keys) {
       if (maxTask < employees[key]) {
         maxTask = employees[key];
         name = key;
       }
    }
    return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
