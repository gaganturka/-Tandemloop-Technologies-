function seriesOfOdd(number){

    result = []


const maxNumber = Math.pow(10, 1000); // 
for(let i =1; i<= maxNumber; i++ ){
    result.push(i)
    if(i == number*2){
        break
    }
}
return result.filter(num => num %2 != 0)
}

const answer = seriesOfOdd('4')
console.log(answer);

// we can give input in line no. 16