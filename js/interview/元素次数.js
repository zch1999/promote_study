var itemNumber = function(arr) {
  let res  = {}
  let max = 0,index = 0
  for(let i = 0,len = arr.length; i< len; i++){
    if(res[arr[i]]) {
      res[arr[i]] += 1 
      if(max < res[arr[i]]){
        max = Math.max(max,res[arr[i]])
        index = arr[i]
      }
    } else {
      res[arr[i]] = 1
    }
    // console.log(index,res[index])
  }
  console.log([index,max])
}

var arr = [3, 5, 6, 5, 9, 8, 10, 5, 7, 7, 10, 7, 7, 7, 7, 10, 10, 10, 10, 10];

itemNumber(arr)