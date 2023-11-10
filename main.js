(() => {
    let result =0;
    let operator = false;
    let opID;
    document.getElementById("addition").addEventListener("click", () =>{
        operator == true;
        opID = "+";
    })
    document.getElementById("1").addEventListener("click", () =>{
        document.getElementById("result").textContent = calcul(result, 1, operator, result);
    })
    document.getElementById("2").addEventListener("click", () =>{
        document.getElementById("result").textContent = calcul(result, 2, operator, result);
    })

    function calcul(pastNumber, number, op, opID, sum){
        pastNumberString = pastNumber.toString();
        numberString = number.toString();
        let bigNumber = pastNumberString + numberString;
        
        if(op == false){
            if(pastNumberString == 0){
                return numberString;
            }
            return parseInt(bigNumber);
        }
        else{
            switch(opID){
                case "+":
                    sum = sum + parseInt(pastNumber) + parseInt(number);
                break;
                case "-":
                    sum = sum - parseInt(pastNumber) + parseInt(number);
                break;
                case "x":
                    sum = sum + parseInt(pastNumber) + parseInt(number);
                break;
                case ":":
                    sum = sum + parseInt(pastNumber) + parseInt(number);
                break;
            }
        }
    }
})();
