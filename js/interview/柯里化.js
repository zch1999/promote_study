
function f() {
  let args = [...arguments];
  let add = function() {
    args.push(...arguments);
    return add;
  };
  add.toString = function() {
    return args.reduce((a, b) => {
      return a + b;
    });
  };
  return add;
}
// f(1)(2)(3) = 6;

console.log(f(1)(2)(3))