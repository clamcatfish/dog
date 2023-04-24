/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?


let daysselected = 0;
let dailyrate = 35;




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const friday = document.getElementById('friday');
const half = document.getElementById('half');
const full = document.getElementById('full');

monday.onclick = function() {
    effect('monday');
};
tuesday.onclick = function() {
    effect('tuesday');
};
wednesday.onclick = function() {
    effect('wednesday');
};
thursday.onclick = function() {
    effect('thursday');
};
friday.onclick = function() {
    effect('friday');
};
half.onclick = function() {
    fullhalf('half');
    dailyrate = 20;
    reverse('full');
};
full.onclick = function() {
    fullhalf('full');
    dailyrate = 35;
    reverse('half');
};

function effect(day) {
    const element = document.getElementById(day);
    daysselected += 1;
    element.classList.add("clicked");
    update();
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const clearbutton = document.getElementById("clear-button");
clearbutton.onclick = function() {
    remove();
};

function remove() {
    document.getElementById('monday').classList.remove("clicked");
    document.getElementById('tuesday').classList.remove("clicked");
    document.getElementById('wednesday').classList.remove("clicked");
    document.getElementById('thursday').classList.remove("clicked");
    document.getElementById('friday').classList.remove("clicked");
    document.getElementById('half').classList.remove("clicked");
    document.getElementById('full').classList.remove("clicked");
    daysselected = 0;
    dailyrate = 0;
    update();
}




function fullhalf(period) {
    document.getElementById(period).classList.add("clicked");
    update();
}
function reverse(period) {
    document.getElementById(period).classList.remove("clicked");
    update();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function update() {
    let total = dailyrate * daysselected;
    document.getElementById("calculated-cost").innerHTML = total;
}

