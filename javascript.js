let result = document.getElementById("result");
let display = document.getElementById("display");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function (event) {
        let button = event.target.textContent;
        let displayNumber = display.textContent.trim();

        if ("0123456789.".includes(button)) {
            display.append(button);
        } else if ("C".includes(button)) {
            display.innerText = "";
            result.innerText = "";
        } else if ("=".includes(button)) {
            let resultNumber = Function("return " + displayNumber + result.textContent.trim())();
            display.innerText = "";
            result.append(resultNumber);
        } else if ("/*-+".includes(button)) {
            display.append(result.textContent.trim())
            display.append(button);
            result.innerHTML = "";
        } else if ("Raise".includes(button)) {
            displayNumber = displayNumber.split("").slice(0, displayNumber.length - 1).join("");
            display.innerHTML = "";
            display.append(displayNumber);
        }
        if (display.textContent != "") {
            result.style.visibility = "hidden";
        } else if (display.textContent == "") {
            result.style.visibility = "visible";
        }
    });
})