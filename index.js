const display_one = document.getElementById("display_one");
const display_two = document.getElementById("display_two");
const plan_select = document.querySelector(".plan_select");
const plan = document.getElementById("plan");
const starter_plan = document.getElementById("starter");
const pro_plan = document.getElementById("pro");
const enterprise_plan = document.getElementById("enterprise");
const content = document.getElementById("content");
const tier = document.getElementById("tier");
const monthly_total = document.getElementById("monthly_total");
const est_savings = document.getElementById("est_savings");
const button = document.querySelectorAll("button");
const btns = document.getElementById("btns");
const form = document.querySelector(".input_monthly_total");
const input_monthly_total = document.getElementById("input_monthly_total");
const desktop = window.matchMedia("(min-width: 769px)");
const mobile = window.matchMedia("(max-width: 768px)");
const sideBar_closer = document.getElementById("sideBar_closer");

function clearAll() {
  display_one.value = "";
  display_two.value = "";
}

const profile_view = document.getElementById("profile_view");
const notification_view = document.getElementById("notification_view");
const history_view = document.getElementById("history_view");

let historyArr = [];
const historyView_content = document.getElementById("historyView_content");
if (historyArr.length < 1) {
  document.getElementById("history").style.display = "none";
}

let justCalculated = false;

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

document.addEventListener("click", function (event) {
  const target = event.target;
  if (!event.target.closest("button")) {
    return;
  } else {
    if (
      event.target.matches("#starter") ||
      event.target.matches("#sideBar_starter")
    ) {
      plan_select.style.display = "none";
      content.style.display = "flex";
      tier.value = "Starter";

      btns.innerHTML = "";

      const button_value = [
        "C",
        "DEL",
        "/",
        "7",
        "8",
        "9",
        "*",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        ".",
        "0",
        "=",
      ];
      const operators = ["/", "*", "-", "+", "="];
      const clear = ["C"];
      const del = ["DEL"];
      const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

      for (let i = 0; i < button_value.length; i++) {
        const values = button_value[i];
        const button = document.createElement("button");
        button.innerText = values;
        btns.appendChild(button);

        (function userInterface() {
          if (clear.includes(values)) {
            button.classList.add("clear");
          } else if (del.includes(values)) {
            button.classList.add("del");
          } else if (operators.includes(values)) {
            if (values === "=") {
              button.classList.add("equate");
            } else {
              button.classList.add("operators");
            }
          } else {
            button.classList.add("digits");
          }
        })();
      }

      document.getElementById("sideBar_starter").style.color = "var(--danger)";
      document.getElementById("sideBar_pro").style.color = "var(--text)";
      document.getElementById("sideBar_enterprise").style.color = "var(--text)";
      document.querySelector(".clear").style.gridColumn = "span 4";
      document.querySelector(".equate").style.gridColumn = "span 4";
      clearAll();
    } else if (
      event.target.matches("#pro") ||
      event.target.matches("#sideBar_pro")
    ) {
      plan_select.style.display = "none";
      content.style.display = "flex";
      tier.value = "Pro";

      btns.innerHTML = "";

      const button_value = [
        "C",
        "DEL",
        "%",
        "÷",
        "7",
        "8",
        "9",
        "×",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        ".",
        "0",
        "=",
      ];
      const operators = ["%", "÷", "×", "-", "+", "="];
      const clear = ["C"];
      const del = ["DEL"];
      const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

      for (let i = 0; i < button_value.length; i++) {
        const values = button_value[i];
        const button = document.createElement("button");
        button.innerText = values;
        btns.appendChild(button);

        (function userInterface() {
          if (clear.includes(values)) {
            button.classList.add("clear");
          } else if (del.includes(values)) {
            button.classList.add("del");
          } else if (operators.includes(values)) {
            if (values === "=") {
              button.classList.add("equate");
            } else {
              button.classList.add("operators");
            }
          } else {
            button.classList.add("digits");
          }
        })();
      }

      document.getElementById("sideBar_starter").style.color = "var(--text)";
      document.getElementById("sideBar_pro").style.color = "var(--danger)";
      document.getElementById("sideBar_enterprise").style.color = "var(--text)";
      document.querySelector(".equate").style.gridColumn = "span 4";
      clearAll();
    } else if (
      event.target.matches("#enterprise") ||
      event.target.matches("#sideBar_enterprise")
    ) {
      plan_select.style.display = "none";
      content.style.display = "flex";
      tier.value = "Enterprise";

      btns.innerHTML = "";

      const button_value = [
        "C",
        "DEL",
        "%",
        "÷",
        "7",
        "8",
        "9",
        "×",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        "(",
        ")",
        "0",
        ".",
        "=",
      ];
      const operators = ["%", "÷", "×", "-", "+", "(", ")", "="];
      const clear = ["C"];
      const del = ["DEL"];
      const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

      for (let i = 0; i < button_value.length; i++) {
        const values = button_value[i];
        const button = document.createElement("button");
        button.innerText = values;
        btns.appendChild(button);

        (function userInterface() {
          if (clear.includes(values)) {
            button.classList.add("clear");
          } else if (del.includes(values)) {
            button.classList.add("del");
          } else if (operators.includes(values)) {
            if (values === "=") {
              button.classList.add("equate");
            } else if (values === "(") {
              button.classList.add("bracket_open");
            } else if (values === ")") {
              button.classList.add("bracket_close");
            } else {
              button.classList.add("operators");
            }
          } else {
            button.classList.add("digits");
          }
        })();
      }

      document.getElementById("sideBar_starter").style.color = "var(--text)";
      document.getElementById("sideBar_pro").style.color = "var(--text)";
      document.getElementById("sideBar_enterprise").style.color =
        "var(--danger)";
      clearAll();
    }
  }
});

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
      }
      else {
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
      if (last === ")" || last === "9" || last === "8" || last === "7" || last === "6" || last === "5" || last === "4" || last === "3" || last === "2" || last === "1" || last === "0") {
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
        (display_two.value.at(-1) === "-" &&
          (display_two.value.at(-2) === "/" ||
            display_two.value.at(-2) === "*" ||
            display_two.value.at(-2) === "+" ||
            display_two.value.at(-2) === "÷" ||
            display_two.value.at(-2) === "×"))
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
          display_two.value += target.textContent
          justCalculated = false;
        } else if (target.textContent === ".") {
          const number = currentNumber(display_two.value);
          const last = display_two.value.at(-1);
          if (number === "") {
            display_two.value += "0.";
          }
          else if (last === "/" || last === "÷" || last === "*" || last === "×" || last === "+" || last === "-") {
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

const monthly = document.getElementById("monthly");
const annual = document.getElementById("annual");
const sideBar_monthly = document.getElementById("sideBar_monthly");
const sideBar_annual = document.getElementById("sideBar_annual");

let current_duration = "monthly";
function updateDuration(duration) {
  current_duration = duration;
  if (duration === "monthly") {
    monthly.classList.add("active_duration");
    annual.classList.remove("active_duration");
    sideBar_monthly.style.color = "var(--danger)";
    sideBar_annual.style.color = "var(--text)";
  } else if (duration === "annual") {
    annual.classList.add("active_duration");
    monthly.classList.remove("active_duration");
    sideBar_annual.style.color = "var(--danger)";
    sideBar_monthly.style.color = "var(--text)";
  }
}
updateDuration("monthly");

const calculator = document.getElementById("calculator");
const analytics_panel = document.getElementById("analytics_panel");
const backTo_calc = document.getElementById("backTo_calc");


const tax = document.getElementById("tax")
function submitValue() {
  if (button) {
    if (mobile.matches) {
      if ((analytics_panel.style.display = "none")) {
        calculator.style.display = "none";
        analytics_panel.style.display = "flex";
        backTo_calc.style.display = "flex";
      }
    }
    setTimeout(() => {
      const inputed_monthly_total = input_monthly_total.value;
      monthly_total.value = `$${inputed_monthly_total.toLocaleString()}`;
      const savings = inputed_monthly_total * 3;
      if (current_duration === "monthly") {
        function addTax() {
          if (tax.checked) {
            est_savings.value = `$${(savings - (savings * 0.1)).toLocaleString()} (3x ROI)`;
          } else {
            est_savings.value = `$${savings.toLocaleString()} (3x ROI)`;
          }
        };
        addTax();
      } else if (current_duration === "annual") {
        function addTax() {
          if (tax.checked) {
            est_savings.value = `$${((savings * 12) - (savings * 12 * 0.1)).toLocaleString()} (3x ROI annually)`
          } else {
            est_savings.value = `$${(savings * 12).toLocaleString()} (3x ROI annually)`;
          }
        };
        addTax()
      }
    }, 400);
  } else {
    return;
  }
}

backTo_calc.addEventListener("click", () => {
  calculator.style.display = "flex";
  analytics_panel.style.display = "none";
  backTo_calc.style.display = "none";
  input_monthly_total.value = "";
  monthly_total.value = "";
  est_savings.value = "";
});

const profile_opener = document.querySelector(".profile_opener");
const sideBar = document.getElementById("sideBar");
const sideBar_duration_options = document.getElementById(
  "sideBar_duration_options",
);
const sideBar_tier_options = document.getElementById("sideBar_tier_options");
const sideBar_opener = document.getElementById("sideBar_opener");

profile_opener.addEventListener("click", function (event) {
  const target = event.target;
  if (
    target.matches("#sideBar_opener") ||
    target.matches("#mobile_sidebarOpener")
  ) {
    sideBar_opener.style.animation = "open 120ms ease-in-out forwards";
    sideBar.classList.toggle("opened");
    sideBar_closer.style.display = "block";
    profile_view.style.display = "none";
    notification_view.style.display = "none"
    history_view.style.display = "none";
    if (!sideBar.classList.contains("opened")) {
      sideBar_opener.style.animation = "close 120ms ease-in-out forwards";
      sideBar_duration_options.classList.remove("options");
      sideBar_tier_options.classList.remove("options");
      sideBar_closer.style.display = "none";
    }
  }
});

sideBar_closer.addEventListener("click", () => {
  sideBar_opener.style.animation = "close 120ms ease-in-out forwards";
  sideBar.classList.remove("opened");

  document.getElementById("sideBar_durationSVG").style.animation =
    "close 120ms ease-in-out forwards";
  sideBar_duration_options.classList.remove("options");

  document.getElementById("sideBar_tierSVG").style.animation =
    "close 120ms ease-in-out forwards";
  sideBar_tier_options.classList.remove("options");

  sideBar_closer.style.display = "none";
  profile_view.style.display = "none";
  notification_view.style.display = "none"
  history_view.style.display = "none";
});

sideBar.addEventListener("click", function (event) {
  const target = event.target;

  if (target.matches("#sideBar_profile")) {
    sideBar_opener.style.animation = "close 120ms ease-in-out forwards";
    sideBar.classList.remove("opened");
    profile_view.style.display = "flex";
  } else if (target.matches("#sideBar_duration")) {
    document.getElementById("sideBar_durationSVG").style.animation =
      "open 120ms ease-in-out forwards";
    sideBar_duration_options.classList.toggle("options");
    if (!sideBar_duration_options.classList.contains("options")) {
      document.getElementById("sideBar_durationSVG").style.animation =
        "close 120ms ease-in-out forwards";
    }
  } else if (target.matches("#sideBar_tier")) {
    document.getElementById("sideBar_tierSVG").style.animation =
      "open 120ms ease-in-out forwards";
    sideBar_tier_options.classList.toggle("options");
    if (!sideBar_tier_options.classList.contains("options")) {
      document.getElementById("sideBar_tierSVG").style.animation =
        "close 120ms ease-in-out forwards";
    }
  } else if (target.matches("#history")) {
    sideBar_opener.style.animation = "close 120ms ease-in-out forwards";
    sideBar.classList.remove("opened");
    history_view.style.display = "flex";
  } else if (target.matches("#sideBar_notification")) {
    sideBar_opener.style.animation = "close 120ms ease-in-out forwards";
    sideBar.classList.remove("opened");
    notification_view.style.display = "flex"
  }
});

nav_icons = document.getElementById("nav_icons")
nav_icons.addEventListener("click", (events) => {
  const target = event.target;
  if (target.matches("#notification")) {
    if (sideBar.classList.contains("opened")) {
      sideBar_opener.style.animation = "close 120ms ease-in-out forwards";
      sideBar.classList.remove("opened");
    } else if (notification_view.style.display !== "flex") {
      sideBar_closer.style.display = "flex";
      notification_view.style.display = "flex";
    } else {
      sideBar_closer.style.display = "none";
      notification_view.style.display = "none";
    }
  } else if (target.matches(".profileSVG")) {
    if (sideBar.classList.contains("opened")) {
      sideBar_opener.style.animation = "close 120ms ease-in-out forwards";
      sideBar.classList.remove("opened");
    } else if (profile_view.style.display !== "flex") {
      sideBar_closer.style.display = "flex";
      profile_view.style.display = "flex";
    } else {
      sideBar_closer.style.display = "none";
      profile_view.style.display = "none";
    }
  }
})

function closeView() {
  profile_view.style.display = "none";
  notification_view.style.display = "none"
  history_view.style.display = "none";
  sideBar_closer.style.display = "none"
}
