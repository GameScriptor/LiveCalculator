Waves.attach('button', 'waves-dark');
Waves.init();

function addOperation(el) {
    if (el.innerText == "π") { var operation = Math.PI }
    else { var operation = el.innerText }
    equation.value += operation;
    evaluateEquation();
}

function evaluateEquation() {
    if (equation.value.split(" ").join("") != "") {
        var equationTxt = Array.from(equation.value);

        equationTxt.forEach((el, i) => {
            if (el == "✖") { equationTxt[i] = "*" }
            else if (el == "÷") { equationTxt[i] = "/" }
        });

        equationTxt = equationTxt.join("");
        try {
            result.innerText = "Result: " + eval(equationTxt);
        } catch {
            result.innerText = "Result: error";
        }
    } else {
        result.innerText = "Result:";
    }
}

function del() {
    var arr = Array.from(equation.value);
    arr.pop();
    equation.value = arr.join("");
    evaluateEquation();
}
/*
document.addEventListener("keydown", () => {
    equation.focus();
    setTimeout(() => { evaluateEquation() }, 100);
});*/
