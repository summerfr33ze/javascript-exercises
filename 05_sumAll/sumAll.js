const sumAll = function(num1,num2) {
sum=0

if (num1 > 0 && num2 > 0){
if (num1 < num2){

while (num1 <= num2) {
    
    sum += num1
    num1++
    }
        
return sum
}
else if (num1 > num2){

while (num1 >= num2) {
    sum += num1
    num1--
}

return sum 
}

}

else {
    return "ERROR"
}
};



// Do not edit below this line
module.exports = sumAll;

