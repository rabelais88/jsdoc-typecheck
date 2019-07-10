// @ts-check
/// <reference path="./test.d.ts" />

/** @type {MyData.Person} */
const John = {
  name: 'john',
  age: '24',
}

/**
 * @type {MyData.CallPerson}
 * @description This is a function to call a person
 * @example
 * CallPerson('karl', 24);
 * */
const CallPerson = (name, age) => {
  console.log(name, age);
  return true;
};

// try use CallPerson.
