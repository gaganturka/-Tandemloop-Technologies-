function seriesOfOdd(number){

    result = []
    if(number %2 == 0){
        number -= 1 
    }

const maxNumber = Math.pow(10, 1000); // 
for(let i =1; i<= maxNumber; i++ ){
    result.push(i)
    if(i == number*2){
        break
    }
}
return result.filter(num => num %2 != 0)
}

const answer = seriesOfOdd(2);
console.log(answer);
