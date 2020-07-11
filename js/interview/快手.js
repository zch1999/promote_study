// function maxnum(arr) {
//   let obj = {}
//   let max = 0
//   let num = null
//   for(let i=0; i<arr.length; i++) {
//     if(obj[arr[i].age]) {
//       obj[arr[i].age] += 1
//     }else {
//       obj[arr[i].age] = 1
//     }
//     if(obj[arr[i].age] > max) {
//       max = obj[arr[i].age]
//       num = arr[i].age
//     }
//   }
//   return [num,max]
// }

// var arr=[{age:1},{age:3},{age:5},{age:8},{age:8}]

// console.log(maxnum(arr))

// function arrayToJson(arr) {
//   var json = {}
//   for (let key in arr) {
//     let index = arr[key]
//     if (!json[index]) {
//       json[index] = 1
//     } else {
//       json[index] = ++json[index]
//     }
//   }
//   return json
// }
// var arr = ['a', 'e', 'r', 't', 'a', 'e', 'a', 't']
// console.log(arrayToJson(arr))


function getUrlToJson(url) {
  var obj = {}
  var index = url.indexOf('?')
  var str = url.substring(index + 1)
  var strArr = str.split('&')
  for (var i = 0; i < strArr.length; i++) {
    var arr = strArr[i].split('=')
    obj[arr[0]] = arr[1]
  }
  return obj
}
var url = 'https://ww.baidu.com?name=xiaoming&age=18'
getUrlToJson(url)


// let arr = '123'
// let a = arr.split('')
// // let a = [1,2,3]
// let b = parseInt(a.join(""),10)
// console.log(b)