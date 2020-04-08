// SET DATE
function clockTick() {
  const d = new Date();
  const day = d.getUTCDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const seconds = d.getSeconds();
  const hours = d.getHours();
  const mins = d.getMinutes();

  newDate = `${day}/${month}/${year}`;
  (newTime = `${hours}:${mins}`),
    (document.querySelector(".time").innerHTML = newDate + " - " + newTime);
}
setInterval(function () {
  clockTick();
}, 1000);

// SET TIME
const hourHand = document.querySelector(".hour-hand");
const minsHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const hours = now.getHours();
  const mins = now.getMinutes();

  const hourDegrees = (hours / 12) * 360 + 90;
  const minsDegrees = (mins / 60) * 360 + 90;
  const secondDegrees = (seconds / 60) * 360 + 90; // changing the second to degrees - 60 sec over 360deg

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  //   console.log(seconds);
  //   console.log(mins);
  //   console.log(hours);
}
// console.log(setdate);
setInterval(setDate, 1000);

/* Improve hands movement going backward when passing the 12 O'clock - movement going backward
- solution: remove temporarely - "transition: all 0.05s;" in CSS - enter if statement. */
