// function add(x){
//   let sum = x;
//   return function resultFn(y){
//       if(arguments.length){ //not relying on falsy value
//           sum += y;
//           return resultFn;
//       }
//       return sum;
//   }
// }
function add(x){
  let sum = x;
  function resultFn(y){
      sum += y;
      return resultFn;
  }
  resultFn.valueOf = function(){
          return sum;
      };
  return resultFn;
}
console.log(add(2)(3))