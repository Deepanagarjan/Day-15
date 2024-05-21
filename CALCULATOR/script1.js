document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn[data-key]');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');

    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const key = this.getAttribute('data-key');
            if (!isNaN(key) || key === '.') {
                expression += key;
                display.value = expression;
            } else {
                alert('Only numbers are allowed');
            }
        });
    });

    clearButton.addEventListener('click', function () {
        expression = '';
        display.value = '';
    });

    equalsButton.addEventListener('click', function () {
        try {
            const result = eval(expression);
            display.value = result;
            expression = result.toString();
        } catch (error) {
            alert('Invalid expression');
        }
    });

    document.addEventListener('keydown', function (event) {
        const key = event.key;
        if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === 'Enter') {
            if (key === 'Enter') {
                equalsButton.click();
            } else {
                expression += key;
                display.value = expression;
            }
        } else {
            alert('Only numbers and operators are allowed');
        }
    });
});
