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
            est_savings.value = `$${(savings - savings * 0.1).toLocaleString()} (3x ROI)`;
          } else {
            est_savings.value = `$${savings.toLocaleString()} (3x ROI)`;
          }
        }
        addTax();
      } else if (current_duration === "annual") {
        function addTax() {
          if (tax.checked) {
            est_savings.value = `$${(savings * 12 - savings * 12 * 0.1).toLocaleString()} (3x ROI annually)`;
          } else {
            est_savings.value = `$${(savings * 12).toLocaleString()} (3x ROI annually)`;
          }
        }
        addTax();
      }
    }, 400);
  } else {
    return;
  }
}
