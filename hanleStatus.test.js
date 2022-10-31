const { exportAllDeclaration } = require('@babel/types');
const handleStatus = require('./script/handleStatus');

test('checks status of the task', () => {
  expect(true.toBe('success'))
})