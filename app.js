const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-display');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent


        if (!action) {
            console.log('number key!')
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide') {
            key.classList.add('is-depressed')
            // add custom attribute
            calculator.dataset.previousKeyType = 'operator'

            const previousKeyType = calculator.dataset.previousKeyType

            if (!action) {
                if (displayedNum === '0' || previousKeyType === 'operator') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
            }

        }
        if (action === 'decimal') {
            display.textContent = displayedNum + '.'
        }
        if (action === 'clear') {
            console.log('clear')
        }
        if (action === 'calculate') {
            const secondValue = displayedNum
            /// LEFT OFF HERE
        }

        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }

        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
    }
})



keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action


        // if the calculator display shows 0, then it will replaced with the clicked key


        if (action === 'decimal') {

        }
    }
})

