let countdownTime = 86400; // 24 hours in seconds

function infiniteCountdown() {
  let hours = Math.floor(countdownTime / 3600);
  let minutes = Math.floor((countdownTime % 3600) / 60);
  let seconds = countdownTime % 60;

  document.getElementById("countdownDisplay").textContent =
    `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;

  countdownTime--;
  if (countdownTime <= 0) {
    countdownTime = 86400; // รีเซ็ตใหม่เมื่อครบ
  }
}
setInterval(infiniteCountdown, 1000);
infiniteCountdown();
