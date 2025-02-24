let result = document.getElementById("result");
let display = document.getElementById("display");

function handleInput(button) {
    let displayNumber = display.textContent.trim();

    if ("0123456789.".includes(button)) {
        display.append(button);
    } else if (button === "C" || button === "ç") {
        display.textContent = "";
        result.textContent = "";
    } else if (button === "=" || button === "Enter") {
        let resultNumber = Function("return " + displayNumber + result.textContent.trim())();
        display.textContent = "";
        result.append(resultNumber);
    } else if ("/*-+".includes(button)) {
        display.append(result.textContent.trim())
        display.append(button);
        result.textContent = "";
    } else if (button === "Raise" || button === "Backspace") {
        display.textContent = displayNumber.slice(0, - 1);
    }
    result.style.visibility = display.textContent ? "hidden" : "visible";
}
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", event => handleInput(event.target.textContent));
})
document.addEventListener("keydown", event => handleInput(event.key));