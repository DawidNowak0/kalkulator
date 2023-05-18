const currentNumber = document.querySelector('.currentNumber');

const sign = document.querySelector('.sign');

const previousNumber = document.querySelector('.previousNumber');

const clearBtn = document.querySelector('.clear');

const numberBtn = document.querySelectorAll('.number');

const operatorsBtn = document.querySelectorAll('.operator');

const equalBtn = document.querySelector('.equal');


let result = '';




clearBtn.addEventListener('click', clear);

numberBtn.forEach((button) => button.addEventListener('click', number));

operatorsBtn.forEach((button) => button.addEventListener('click', operate));

equalBtn.addEventListener('click', showResult);




function number(){
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && currentNumber.innerHTML === '0') return currentNumber.innerHTML = '0.';
    if(currentNumber.innerHTML === '0') return currentNumber.innerHTML = this.textContent;
    currentNumber.innerHTML += this.textContent;
}

function operate(){
    if(currentNumber.innerHTML === '' && this.textContent ==="-"){
        currentNumber.innerHTML = '-';
        return
    }
    else if(currentNumber.innerHTML === ''){
        return
    }

    if(previousNumber.innerHTML !== ''){
        showResult()
    }

    previousNumber.innerHTML = currentNumber.innerHTML;
    sign.innerHTML = this.textContent;
    currentNumber.innerHTML ='';
}

function showResult(){
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);

    switch(sign.innerHTML) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = b - a;
            break;
        case 'X':
            result = a * b;
            break;
        case ':':
            result = b / a;
            break;
        case 'x^':
            result = b ** a;
            break;
    }

    currentNumber .innerHTML= result;
    previousNumber.innerHTML = '';
    sign.innerHTML = '';

}

function clear(){
    currentNumber.innerHTML = '0';
    previousNumber.innerHTML = '';
    sign.innerHTML = '';
    result = '';
}
