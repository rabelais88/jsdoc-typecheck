// @ts-check // add this to top
// or add this to VScode settigns:     "javascript.implicitProjectConfig.checkJs": true
// https://devhints.io/jsdoc
/** @type {number} */
const price = 12000;
/** @type {string} */
const productName = 'squiggly';

/**
 * @description Function to create new stuff.
 * @param {string} _name - Name of product.
 * @param {number} _price - Price of product.
 * @returns {boolean} - Returns value.
 * @example
 * createStuff('sksks', 1500);
 */
function createStuff(_name, _price) {
  console.log(_price, _name);
  return true;
}

createStuff(productName, price);

createStuff(price, productName);
