export default revInt
/**
 * Given an integer, return an integer that is the reverse
 * ordering of numbers.
 * revInt(25) === 52
 * revInt(-123) === -321
 * @param {Number} - the integer which will be reveresed
 * @returns {Number} - returns the reversed integer
 */

function revInt(num) {
  const rev = num.toString().split('').reverse().join('')
  return Number(rev) * Math.sign(num)
}
