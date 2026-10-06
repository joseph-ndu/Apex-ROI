if (historyArr.length < 1) {
  document.getElementById("history").style.display = "none";
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

backTo_calc.addEventListener("click", () => {
  calculator.style.display = "flex";
  analytics_panel.style.display = "none";
  backTo_calc.style.display = "none";
  input_monthly_total.value = "";
  monthly_total.value = "";
  est_savings.value = "";
});

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
    notification_view.style.display = "none";
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
  notification_view.style.display = "none";
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
    notification_view.style.display = "flex";
  }
});

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
});

function closeView() {
  profile_view.style.display = "none";
  notification_view.style.display = "none";
  history_view.style.display = "none";
  sideBar_closer.style.display = "none";
}
