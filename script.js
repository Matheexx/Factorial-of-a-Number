const input_number = document.getElementById("input_number");
const input_button = document.getElementById("input_button");

const result = document.getElementById("result");

input_button.addEventListener("click", () => {
    result.innerHTML = "";
    if (input_number.value.length == 0) {
        input_number.value = "";
        alert("[ERROR] Type a number!");
    }
    else if (Number(input_number.value) < 0) {
        input_number.value = "";
        alert("[ERROR] Type positive number!")
    }
    else {
        let number = Number(input_number.value);
        if (number == 0 || number == 1) {
            result.innerHTML = `<p>The factorial of ${number} is 1</p>`;
            result.innerHTML += `<p>${number}! = 1</p>`
        }
        else {
            function factorial(old_number) {
                for (let i = old_number - 1; i >= 1; i--) {
                    old_number = old_number * i;
                }
                return old_number;
            }

            let newnumber = factorial(number);

            result.innerHTML = `<p>The factorial of ${number} is ${newnumber}</p>`;
            result.innerHTML += `<p>${number}! = ${newnumber}</p>`;
        }
    }
})