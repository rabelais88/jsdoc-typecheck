// @ts-check
/// <reference path="./test.d.ts" />

/** @type {MyData.Person} */
const John = {
  name: 'john',
  age: '24',
}

/** @type {MyData.CallPerson} */
const CallPerson = (name, age) => {
  console.log(name, age);
  return true;
};

// try use CallPerson.
