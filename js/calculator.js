function clearAll() {
  display_one.value = "";
  display_two.value = "";
}

function result() {
  const expression = display_two.value
    .replaceAll("%", "/100")
    .replaceAll("÷", "/")
    .replaceAll("×", "*")
    .replaceAll("x²", "**2");
  const answer = Function(`return ${expression}`)();
  display_one.value = display_two.value;
  display_two.value = answer.toLocaleString();
  justCalculated = true;

  historyArr.unshift({
    expression: display_one.value,
    answer: display_two.value,
  });

  if (historyArr.length > 7) {
    historyArr.pop();
  }

  historyView_content.innerHTML = "";
  const caption = document.createElement("caption");
  caption.innerText = "Calculator History";
  historyView_content.appendChild(caption);

  for (let i = 0; i < historyArr.length; i++) {
    const historyValue = historyArr[i];
    const li = document.createElement("li");
    const expSpan = document.createElement("span");
    expSpan.innerText = `${historyValue.expression}`;
    expSpan.classList.add("expression");
    const answerSpan = document.createElement("span");
    answerSpan.innerText = ` = ${historyValue.answer}`;
    li.appendChild(expSpan);
    li.appendChild(document.createElement("br"));
    li.appendChild(answerSpan);
    historyView_content.appendChild(li);
  }

  if (historyArr.length >= 1) {
    document.getElementById("history").style.display = "flex";
  }

  if (answer.toLocaleString() === "∞") {
    display_one.value = "";
    display_two.value = "Invalid Entry";
  }
}

function bracketsBalanced(expression) {
  let count = 0;

  for (const char of expression) {
    if (char === "(") {
      count++;
    } else if (char === ")") {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return count === 0;
}

function currentNumber(expression) {
  return expression.split(/[+\-*/×÷()]/).pop();
}

btns.addEventListener("click", function (event) {
  const target = event.target;
  if (!target.closest("button")) {
    return;
  } else {
    if (target.matches(".equate")) {
      if (display_two.value === "") {
        display_two.value = "";
      } else if (
        display_two.value.endsWith("/") ||
        display_two.value.endsWith("÷") ||
        display_two.value.endsWith("*") ||
        display_two.value.endsWith("×") ||
        display_two.value.endsWith("+") ||
        display_two.value.endsWith("-") ||
        display_two.value.endsWith(".") ||
        display_two.value.endsWith("(")
      ) {
        display_two.value = "Invalid Entry";
      } else if (!bracketsBalanced(display_two.value)) {
        display_two.value = "Invalid Entry";
        return;
      } else {
        result();
      }
    } else if (target.matches(".clear")) {
      clearAll();
    } else if (target.matches(".del")) {
      if (display_two.value === "Invalid Entry") {
        clearAll();
      } else {
        display_two.value = display_two.value.slice(0, -1);
      }
    } else if (target.matches(".bracket_open")) {
      const last = display_two.value.at(-1);
      if (
        last === ")" ||
        last === "9" ||
        last === "8" ||
        last === "7" ||
        last === "6" ||
        last === "5" ||
        last === "4" ||
        last === "3" ||
        last === "2" ||
        last === "1" ||
        last === "0"
      ) {
        display_two.value += "×" + target.textContent;
      } else {
        display_two.value += target.textContent;
      }
    } else if (target.matches(".bracket_close")) {
      const last = display_two.value.at(-1);
      if (
        display_two.value === "" ||
        last === "(" ||
        last === "+" ||
        last === "-" ||
        last === "*" ||
        last === "/" ||
        last === "×" ||
        last === "÷"
      ) {
        display_two.value += "";
      } else {
        display_two.value += target.textContent;
      }
    } else if (target.matches(".operators")) {
      if (justCalculated) {
        display_two.value = display_two.value.replaceAll(",", "");
        display_two.value += target.textContent;
        justCalculated = false;
      } else if (target.textContent === "-") {
        if (
          display_two.value.endsWith("/") ||
          display_two.value.endsWith("÷") ||
          display_two.value.endsWith("*") ||
          display_two.value.endsWith("×") ||
          display_two.value.endsWith("+")
        ) {
          display_two.value += target.textContent;
        } else if (display_two.value.endsWith("-")) {
          display_two.value = display_two.value.slice(0, -1);
          display_two.value += target.textContent;
        } else {
          display_two.value += target.textContent;
        }
      } else if (display_two.value.endsWith(".")) {
        display_two.value += "";
      } else if (display_two.value.endsWith("(")) {
        display_two.value += "";
      } else if (
        display_two.value.at(-1) === "-" &&
        (display_two.value.at(-2) === "/" ||
          display_two.value.at(-2) === "*" ||
          display_two.value.at(-2) === "+" ||
          display_two.value.at(-2) === "÷" ||
          display_two.value.at(-2) === "×")
      ) {
        display_two.value += "";
      } else if (
        display_two.value.endsWith("/") ||
        display_two.value.endsWith("÷") ||
        display_two.value.endsWith("*") ||
        display_two.value.endsWith("×") ||
        display_two.value.endsWith("+") ||
        display_two.value.endsWith("-")
      ) {
        display_two.value = display_two.value.slice(0, -1);
        display_two.value += target.textContent;
      } else {
        if (display_two.value !== "") {
          display_two.value += target.textContent;
        }
      }
    } else {
      if (target.matches(".digits")) {
        if (justCalculated) {
          display_two.value = "";
          display_two.value += target.textContent;
          justCalculated = false;
        } else if (target.textContent === ".") {
          const number = currentNumber(display_two.value);
          const last = display_two.value.at(-1);
          if (number === "") {
            display_two.value += "0.";
          } else if (
            last === "/" ||
            last === "÷" ||
            last === "*" ||
            last === "×" ||
            last === "+" ||
            last === "-"
          ) {
            display_two.value += "0.";
          } else if (!number.includes(".")) {
            display_two.value += ".";
          }
        } else if (display_two.value === "0") {
          display_two.value = target.textContent;
        } else {
          display_two.value += target.textContent;
        }
      }
    }
  }
});
