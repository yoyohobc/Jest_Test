const {sum,minus,activation} = require('./ApiCall');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('minus 3 - 1 to equal 2', () => {
    expect(minus(3, 1)).toBe(2);
  });

test('activation', async () => {
  var resp = await activation('86100266', '2');
  expect(resp).toStrictEqual({"code": 0, "data": {"activationStatus": 1}, "msg": "success"});
});