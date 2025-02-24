let result = document.getElementById("result");
let display = document.getElementById("display");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function (event) {
        let button = event.target.textContent;
        let displayNumber = display.textContent.trim();

        if ("0123456789.".includes(button)) {
            display.append(button);
        } else if (button === "C") {
            display.textContent = "";
            result.textContent = "";
        } else if (button === "=") {
            let resultNumber = Function("return " + displayNumber + result.textContent.trim())();
            display.textContent = "";
            result.append(resultNumber);
        } else if ("/*-+".includes(button)) {
            display.append(result.textContent.trim())
            display.append(button);
            result.textContent = "";
        } else if ("Raise".includes(button)) {
            display.textContent = displayNumber.slice(0, - 1);
        }
        result.style.visibility = display.textContent ? "hidden" : "visible";

    });
})
document.addEventListener("keydown", function (event) {
    let button = event.key;
    let displayNumber = display.textContent.trim();

    if ("0123456789.".includes(button)) {
        display.append(button);
    } else if (button === "ç") {
        display.textContent = "";
        result.textContent = "";
    } else if (button === "Enter") {
        let resultNumber = Function("return " + displayNumber + result.textContent.trim())();
        display.textContent = "";
        result.append(resultNumber);
    } else if ("/*-+".includes(button)) {
        display.append(result.textContent.trim())
        display.append(button);
        result.textContent = "";
    } else if ("Backspace".includes(button)) {
        display.textContent = displayNumber.slice(0, - 1);
    }
    result.style.visibility = display.textContent ? "hidden" : "visible";

});