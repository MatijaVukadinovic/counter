let number = document.getElementById("numberDisplay");
let decreaseButton =  document.getElementById("decreaseButton");
let increaseButton =  document.getElementById("increaseButton");
let resetButton = document.getElementById("resetButton");

increaseButton.addEventListener("click", function() {
    number.innerHTML = Number(number.innerHTML) + 1;
});

decreaseButton.addEventListener("click", function() {
    number.innerHTML = Number(number.innerHTML) - 1;
});

resetButton.addEventListener("click", function() {
    number.innerHTML = 0;
})
