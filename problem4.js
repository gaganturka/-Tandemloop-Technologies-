let arr = [1,2,8,9,12,46,76,82,15,20,30]

let newArr = arr.join('').split('')
let result = {}

for(let i=0; i<newArr.length; i++){
    if(result.hasOwnProperty(newArr[i])){
        result[newArr[i]] += 1
    } else{
        result[newArr[i]] = 1
    }

}
console.log(result);