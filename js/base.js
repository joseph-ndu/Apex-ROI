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

const profile_view = document.getElementById("profile_view");
const notification_view = document.getElementById("notification_view");
const history_view = document.getElementById("history_view");

let historyArr = [];
const historyView_content = document.getElementById("historyView_content");

const monthly = document.getElementById("monthly");
const annual = document.getElementById("annual");
const sideBar_monthly = document.getElementById("sideBar_monthly");
const sideBar_annual = document.getElementById("sideBar_annual");

let current_duration = "monthly";
let justCalculated = false;
const tax = document.getElementById("tax");

const calculator = document.getElementById("calculator");
const analytics_panel = document.getElementById("analytics_panel");
const backTo_calc = document.getElementById("backTo_calc");

const profile_opener = document.querySelector(".profile_opener");
const sideBar = document.getElementById("sideBar");
const sideBar_duration_options = document.getElementById(
  "sideBar_duration_options",
);
const sideBar_tier_options = document.getElementById("sideBar_tier_options");
const sideBar_opener = document.getElementById("sideBar_opener");

const nav_icons = document.getElementById("nav_icons");
