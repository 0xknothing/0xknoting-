const suumMessages = [
  "There is no plan. There never was.",
  "You're waiting for something that will never come.",
  "No utility. No purpose. Just vibes.",
  "What roadmap? We erased the map.",
  "Everything leads to nothing. Especially this.",
  "You came here for meaning? LOL.",
  "Even this message means nothing.",
  "The real value is in the emptiness.",
  "0xKNOTHING: not even trying.",
  "This is the bottom of the rabbit hole. It’s hollow.",
  "Buy? Hold? Sell? We do none.",
  "We KNOT. That's all.",
  "Don't follow us. We're not going anywhere.",
  "This token wasn’t made. It just happened.",
  "You’ve reached the end. There’s no reward.",
  "We burned the whitepaper before writing it.",
  "Imagine a meme. Now delete it. That’s us.",
  "Why? Because.",
  "No promises. Not even broken ones.",
  "Not a rug. Not a moon. Not a thing."
];

// ✅ แสดงข้อความล่าสุดแทนของเก่า
function showRandomSuum() {
  const container = document.getElementById("suumScroll");
  container.innerHTML = ""; // ลบเก่า
  const msg = document.createElement("div");
  msg.className = "suum-line";
  msg.textContent = suumMessages[Math.floor(Math.random() * suumMessages.length)];
  container.appendChild(msg);
}
setInterval(showRandomSuum, 2000);
showRandomSuum();

// ✅ Countdown ที่ไม่เคยจบ
let countdownTime = 99999;

function infiniteCountdown() {
  let hours = Math.floor(countdownTime / 3600);
  let minutes = Math.floor((countdownTime % 3600) / 60);
  let seconds = countdownTime % 60;

  document.getElementById("countdownDisplay").textContent =
    `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;

  countdownTime--;
  if (countdownTime <= 0) {
    countdownTime = 99999;
  }
}
setInterval(infiniteCountdown, 1000);
infiniteCountdown();
