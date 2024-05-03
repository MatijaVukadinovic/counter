let number = document.getElementById("numberDisplay");
let decreaseButton =  document.getElementById("decreaseButton");
let increaseButton =  document.getElementById("increaseButton");
let resetButton = document.getElementById("resetButton");

increaseButton.addEventListener("click", function() {
    number.innerHTML = Number(number.innerHTML) + 1;
    
    if (Number(number.innerHTML) == 0) {
        number.classList.remove("redText");
        number.classList.remove("greenText");
    }

    if (Number(number.innerHTML) > 0) {
        number.classList.remove("redText");
        number.classList.add("greenText");
    }
});

decreaseButton.addEventListener("click", function() {
    number.innerHTML = Number(number.innerHTML) - 1;

    if (Number(number.innerHTML) == 0) {
        number.classList.remove("redText");
        number.classList.remove("greenText");
    }

    if (Number(number.innerHTML) < 0) {
        number.classList.remove("greenText");
        number.classList.add("redText");
    }
});

resetButton.addEventListener("click", function() {
    number.innerHTML = 0;
    number.classList.remove("greenText");
    number.classList.remove("redText");
})
