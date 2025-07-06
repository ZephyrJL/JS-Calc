
    const submit = document.getElementById('nameForm');
    

    submit.addEventListener('submit', function (event) {
        event.preventDefault(); //prevents from refreshing;
        const firstName = document.getElementsByName('firstname')[0].value;
        document.getElementById('WelcomeText').textContent = `Hello ${firstName}`;
        document.getElementById('nameForm').reset(); //resets the form
    });
    // Calculator functionality
    //Returns the value of the button clicked, which is the number set in html
    const display = document.getElementById('display');
    document.querySelectorAll('.number-button').forEach(button => {
        button.addEventListener('click', function(event) {
            display.value += event.target.dataset.value;
            
        })
    })
    

    document.querySelectorAll('.operator-button').forEach(button => {
        button.addEventListener('click', function(event) {
            let trimmed = display.value.trim();
            let lastChar = trimmed.slice(-1);
            if (display.value === '') {
                display.value = '0'; // Prevents starting with an operator
            }
            else if (['+', '-', '*', '/'].includes(lastChar)) {
                display.value = display.value.slice(0, -1) + event.target.dataset.value;
            }
            else {
                display.value += `${event.target.dataset.value}`;
            }
        })
    })
    document.getElementById('clear-button').addEventListener('click', function() {
        display.value = ''; 
    })

    document.getElementById('equals-button').addEventListener('click', function() {
        try {
            let result = eval(display.value);
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    })
    
