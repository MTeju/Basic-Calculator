function Clear(){
    document.querySelector('.display').value = "";
    document.querySelector('.js-result').innerHTML = "";
}

function clearOne(){
    var input = document.querySelector(".display");
    var inputValue = input.value;
    if (inputValue.length > 0) {
        var newValue = inputValue.substring(0, inputValue.length - 1);
        input.value = newValue;
    }
}

function calculate(value){
    let res = document.querySelector('#js-input').value += value; 

    if(res.includes('!')){
        calFact(res);
        return;
    }else if(res.includes('^')){
        calPower(res);
        return;
    }else if(res.includes('sqrt ')){
        calSqrt(res);
        return;
    }else if(res.includes('Abs ')){
        calAbs(res);
        return;
    }
}

function calResult(value){
    let cal = eval(document.querySelector('.display').value);
    document.querySelector('.js-result').innerHTML = `${cal}`;
}

function calFact(value){
    let str = document.querySelector('.display').value = value;
    console.log(str);

    let numbers = str.split(/\D+/).filter(Boolean);

    let n = numbers[0];

    n= Number(n);
    let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
    document.querySelector('.js-result').innerHTML = `${result}`;
}

function calPower(value){
    let str = document.querySelector('.display').value = value;
    console.log(str);

    let numbers = str.split(/\D+/).filter(Boolean);

    let lv = numbers.length - 1;
    console.log(numbers[0] , numbers[lv]);

    let base = numbers[0];
    let exp = numbers[lv];

    let res = Math.pow(base , exp);

    document.querySelector('.js-result').innerHTML = `${res}`;
}

function calSqrt(value){
    let str = document.querySelector('.display').value = value;

    let numbers = str.split(/\D+/).filter(Boolean);

    let lv = numbers.length - 1;
    let exp = numbers[lv];

    let res = Math.sqrt(exp);
    document.querySelector('.js-result').innerHTML = `${res}`;

}

function calAbs(value){
    let str = document.querySelector('.display').value = value;

    let numbers = str.split(/\D+/).filter(Boolean);

    let lv = numbers.length - 1;
    let exp = numbers[lv];

    let res = Math.abs(exp);
    document.querySelector('.js-result').innerHTML = `${res}`;
}
