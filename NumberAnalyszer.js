function analyzeANumber(number){
    let stringifiedNumber = number.toString();
    // console.log(stringifiedNumber);
    // console.log(stringifiedNumber.length);
    // console.log(stringifiedNumber.[0]);

    var arrayOfNumbers = [];
    var digitCounter = 0;
    for(i = (stringifiedNumber.length - 1); i >=0; i--){
        // console.log(i);
            arrayOfNumbers.push(Math.pow(10,i) * stringifiedNumber[digitCounter]);
            
            digitCounter++;
    }
        
    console.log(arrayOfNumbers);
}

var number = 23625;
analyzeANumber(number);