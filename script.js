// Infinite "nothing" messages
const suumMessages = [
  "There is no plan. There never was.",
  "You're waiting for something that will never come.",
  "No utility. No purpose. Just vibes.",
  "Even this message means nothing.",
  "Stay unready.",
  "0xKNOTHING: not even trying.",
  "The real value is in the emptiness.",
  "Not a rug. Not a moon. Not a thing."
];

function showRandomSuum() {
  const container = document.getElementById("suumScroll");
  container.innerHTML = "";
  const msg = document.createElement("div");
  msg.textContent = suumMessages[Math.floor(Math.random() * suumMessages.length)];
  container.appendChild(msg);
}
setInterval(showRandomSuum, 3000);
showRandomSuum();

// Infinite countdown (never ends)
let countdownTime = 99999;
function infiniteCountdown() {
  let hours = Math.floor(countdownTime / 3600);
  let minutes = Math.floor((countdownTime % 3600) / 60);
  let seconds = countdownTime % 60;
  document.getElementById("countdownDisplay").textContent =
    `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
  countdownTime--;
  if (countdownTime <= 0) countdownTime = 99999;
}
setInterval(infiniteCountdown, 1000);
infiniteCountdown();
