const buton = document.querySelector('.start-count');
const digit_1 = document.querySelector('.counter-digit-1')
const digit_2 = document.querySelector('.counter-digit-2')
const digit_3 = document.querySelector('.counter-digit-3')


digit_1.innerHTML = `0`;
digit_2.innerHTML = `0`;
digit_3.innerHTML = `0`;

buton.addEventListener('click', () => {
    var value = 0;
    while (value < 10) {
        var value = 0;
        digit_1.innerHTML = value;
        if (value < 10 || value == 0) {
            value = value + 1;
        }

    }
});