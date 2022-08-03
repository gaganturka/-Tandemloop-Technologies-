function smallCalculator(num1 , operator, num2){
   
    if(isNaN(num1 || num2) == true){
        return "please Enter Valid Number"
    }else if(operator == '+' ){
        return num1 + num2
    } else if(operator == '-'){
        return num1 - num2
    } else if (operator == '*'){
        return num1*num2
    } else if(operator == '/'){
        return num1/num2
    } else{
        return 'Please Enter valid number or operator'
    }
}
const answer = smallCalculator(2, '+',  4 );
console.log(answer);
// we can give input1 + operation + input2 in line no. 17