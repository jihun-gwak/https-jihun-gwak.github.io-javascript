/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let totalCost;
var dailyRate = 35;
var numDays = 0;
var dayButton = document.getElementsByClassName("blue-hover");
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");
var half = document.getElementById("half");
var full = document.getElementById("full");
var clearBtn = document.getElementById("clear-button");
var calculatedCost = document.getElementById("calculated-cost");
var daysArray = [monday, tuesday, wednesday, thursday, friday];

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

for (let i = 0; i < daysArray.length; i++) {
  daysArray[i].addEventListener("click", function () {
    if (!this.classList.contains("clicked")) {
      this.classList.add("clicked");
      numDays += 1;
    } else if (this.classList.contains("clicked")) {
      this.classList.remove("clicked");
      numDays -= 1;
    }
    recalculate();
  });
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearBtn.addEventListener("click", function () {
  for (let i = 0; i < dayButton.length; i++) {
    if (dayButton[i].classList.contains("clicked")) {
      dayButton[i].classList.remove("clicked");
    }
  }
  full.classList.add("clicked");
  dailyRate = 35;
  numDays = 0;
  calculatedCost.innerHTML = 0;
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half.addEventListener("click", function () {
  if (!half.classList.contains("clicked")) {
    full.classList.remove("clicked");
    half.classList.add("clicked");
    dailyRate = 20;
    recalculate();
  }
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.addEventListener("click", function () {
  if (!full.classList.contains("clicked")) {
    half.classList.remove("clicked");
    full.classList.add("clicked");
    dailyRate = 35;
    recalculate();
  }
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
  totalCost = numDays * dailyRate;
  calculatedCost.innerHTML = totalCost;
}
