import test from 'ava'
import {
  revInt,
} from '../src'

test('Return a number which is the param re-arranged in descending order ', t => {
  const num = 123
  const expected = 321
  const actual = revInt(num)
  t.deepEqual(actual, expected)
})
