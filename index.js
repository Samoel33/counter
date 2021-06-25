const buton = document.querySelector('.start-count');
const reset = document.querySelector('.reset-count');
const digit_1 = document.querySelector('.counter-digit-1');
const digit_2 = document.querySelector('.counter-digit-2');
const digit_3 = document.querySelector('.counter-digit-3');
const body = document.querySelector('.counter-container');
const para = document.querySelector('.hundred1');

digit_1.innerHTML = `${0}`;
digit_2.innerHTML = `${0}`;
digit_3.innerHTML = `${0}`;
var value = 0;
var value1 = 0;
var value3 = 0;

buton.addEventListener('click', () => {
    count();
    if (digit_1.innerHTML == 1 && digit_2.innerHTML == 0 && digit_3.innerHTML == 0) {
        body.classList.toggle('hundred');
        para.classList.toggle('celebrate');
        para.innerHTML = 'ONE HUNDRED';
        if (digit_1.innerHTML == 0 && digit_2.innerHTML == 0 && digit_3.innerHTML == 0) {
            digit_3.innerHTML = `${value}`;
            digit_2.innerHTML = `${value1}`;
            digit_1.innerHTML = `${value3}`;
        }

    } else {
        if (digit_1.innerHTML == 1 && digit_2.innerHTML == 0 && digit_3.innerHTML == 1) {
            body.classList.toggle('hundred');
            para.classList.toggle('celebrate');
        }
    }
    if (digit_1.innerHTML == 2 && digit_2.innerHTML == 0 && digit_3.innerHTML == 0) {
        body.classList.toggle('hundred');
        para.classList.toggle('celebrate');
        para.innerHTML = 'TWO HUNDRED';
        if (digit_1.innerHTML == 0 && digit_2.innerHTML == 0 && digit_3.innerHTML == 0) {
            digit_3.innerHTML = `${value}`;
            digit_2.innerHTML = `${value1}`;
            digit_1.innerHTML = `${value3}`;
        }

    } else {
        if (digit_1.innerHTML == 2 && digit_2.innerHTML == 0 && digit_3.innerHTML == 1) {
            body.classList.toggle('hundred');
            para.classList.toggle('celebrate');
        }
    }
    if (digit_1.innerHTML == 3 && digit_2.innerHTML == 0 && digit_3.innerHTML == 0) {
        body.classList.toggle('hundred');
        para.classList.toggle('celebrate');
        para.innerHTML = 'THREE HUNDRED';
        if (digit_1.innerHTML == 0 && digit_2.innerHTML == 0 && digit_3.innerHTML == 0) {
            digit_3.innerHTML = `${value}`;
            digit_2.innerHTML = `${value1}`;
            digit_1.innerHTML = `${value3}`;
        }

    } else {
        if (digit_1.innerHTML == 3 && digit_2.innerHTML == 0 && digit_3.innerHTML == 1) {
            body.classList.toggle('hundred');
            para.classList.toggle('celebrate');
        }
    }
    if (digit_1.innerHTML == 4 && digit_2.innerHTML == 0 && digit_3.innerHTML == 0) {
        body.classList.toggle('hundred');
        para.classList.toggle('celebrate');
        para.innerHTML = 'FOUR HUNDRED';
        if (digit_1.innerHTML == 0 && digit_2.innerHTML == 0 && digit_3.innerHTML == 0) {
            digit_3.innerHTML = `${value}`;
            digit_2.innerHTML = `${value1}`;
            digit_1.innerHTML = `${value3}`;
        }

    } else {
        if (digit_1.innerHTML == 4 && digit_2.innerHTML == 0 && digit_3.innerHTML == 1) {
            body.classList.toggle('hundred');
            para.classList.toggle('celebrate');
        }
    }
    if (digit_1.innerHTML == 5 && digit_2.innerHTML == 0 && digit_3.innerHTML == 0) {
        body.classList.toggle('hundred');
        para.classList.toggle('celebrate');
        para.innerHTML = 'FIVE HUNDRED';
        if (digit_1.innerHTML == 0 && digit_2.innerHTML == 0 && digit_3.innerHTML == 0) {
            digit_3.innerHTML = `${value}`;
            digit_2.innerHTML = `${value1}`;
            digit_1.innerHTML = `${value3}`;
        }

    } else {
        if (digit_1.innerHTML == 5 && digit_2.innerHTML == 0 && digit_3.innerHTML == 1) {
            body.classList.toggle('hundred');
            para.classList.toggle('celebrate');
        }
    }


});
reset.addEventListener('click', () => {
    digit_1.innerHTML = `${0}`;
    digit_2.innerHTML = `${0}`;
    digit_3.innerHTML = `${0}`;
    value = 0;
    value1 = 0;
    value3 = 0;

})

function count() {
    if (value3 != 9) {
        if (value <= 9 || digit_3.innerHTML == 0) {
            value = value + 1;
            digit_3.innerHTML = `${value}`
            if (digit_3.innerHTML == 10) {
                value1 = value1 + 1;
                digit_3.innerHTML = `${0}`;
                value = 0;
                digit_2.innerHTML = `${value1}`;
                if (digit_2.innerHTML == 10) {
                    value3 = value3 + 1;
                    digit_2.innerHTML = `${0}`;
                    value1 = 0;
                    digit_1.innerHTML = `${value3}`;
                }

            }
        }



    }

}