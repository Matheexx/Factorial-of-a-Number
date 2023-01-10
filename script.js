const input_number = document.getElementById("input_number");
const input_button = document.getElementById("input_button");

const result = document.getElementById("result");

input_button.addEventListener("click", () => {
    result.innerHTML = "";
    if (input_number.value.length == 0) {
        alert("[ERROR] Type a number!");
    }
    else if (Number(input_number.value) < 0) {
        alert("[ERROR] Type positive number!")
    }
    else if (Number(input_number.value) > 170) {
        alert("[ERROR] Number too big, please retype!")
    }
    else {
        let number = Number(input_number.value);

        let newnumber = factorial(number);

        result.innerHTML = `<p>The factorial of ${number} is ${newnumber}</p>`;
        result.innerHTML += `<p>${number}! = ${newnumber}</p>`;
    }
    input_number.value = "";
})

function factorial(old_number) {
    if (old_number == 0 || old_number == 1) {
        return 1;
    }
    
    else {
        for (let i = old_number - 1; i >= 1; i--) {
            old_number = old_number * i;
        }
        return old_number;
    }
}
