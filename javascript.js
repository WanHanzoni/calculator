
function operatorAdd(numA, numB) {
    return numA + numB
}

// console.log(operatorAdd(4, 5));

// switch {
//     case 1:
//         console.log(buttonPressed());
//         break;

// }
let display = document.getElementById("head");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function (event) {
        let button = event.target.textContent;
        let displayNumber = display.textContent.trim();
        if ("0123456789./*-+".includes(button)) {
            display.append(button);
        }
        else if ("C".includes(button)) {
            display.innerText = ""
        }
        else if ("=".includes(button)) {
            var memoryNumber = displayNumber
            display.innerText = ""
            var result = Function("return " + memoryNumber)();
            display.append(result);
        }

    });

});
