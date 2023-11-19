///////////////// FILLED //////////////////
document.addEventListener("DOMContentLoaded", (event) => {
const toggler = document.getElementById('toggle-div');
const toggleSlider = toggler.querySelector('.toggle-slider');
let togglerOn = false;

let startcountdown = 60*5;
// Set the countdown time in seconds
var countdownTime = startcountdown; // 1 hour in seconds

const checkinButton = document.getElementById("checkin");


toggler.addEventListener('click', () => {

  togglerOn = !togglerOn;
  if(togglerOn){
    toggleSlider.style.left = '50%';
    toggler.style.background = 'green'
    checkinButton.style.background = "purple";


  } else{
    toggleSlider.style.left = '0';
    toggler.style.background = 'red'
    checkinButton.style.background = "gray";
  }
});

checkinButton.addEventListener("click", (event) => {
    if(togglerOn){
        countdownTime = 60*60;
        document.getElementById("location").remove();
        checkinButton.textContent = "Checka ut";
        document.getElementById("header").textContent = "Tid du har kvar på din bokning:";
        checkinButton.addEventListener("click", (event) => {
            document.getElementById("countdown").remove()
            document.getElementById("header").textContent = "Du har nu checkat ut. Tack för att du använder inchekr!"; 
            checkinButton.remove();
            document.getElementById("checkimg").style.display = "block";
        });
    }
});








// Get the countdown element
var countdownElement = document.getElementById('countdown');

// Function to update the countdown
function updateCountdown() {
  var hours = Math.floor(countdownTime / 3600);
  var minutes = Math.floor((countdownTime % 3600) / 60);
  var seconds = countdownTime % 60;
  countdownElement.innerHTML = '';
  // Display the countdown in the element
  if(hours > 0) {
    countdownElement.innerHTML = hours + ':';
  }
  if(minutes - 10 < 1) {
    countdownElement.innerHTML += '0'; 
  }
  countdownElement.innerHTML +=  minutes + ':'

  if(seconds - 10 < 1) {
    countdownElement.innerHTML += '0'; 
  }
  countdownElement.innerHTML += seconds;

  // Decrement the countdown time
  countdownTime--;

  // Check if the countdown has reached zero
  if (countdownTime < 0) {
    clearInterval(interval);
    countdownElement.innerHTML = 'Countdown Expired!';
  }
}

// Initial call to set the countdown display
updateCountdown();

// Update the countdown every second
var interval = setInterval(updateCountdown, 1000);


});