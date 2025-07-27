document.addEventListener("DOMContentLoaded", function () {
  // 💬 Message feed
  const messages = [
    "There is no plan. There never was.",
    "You're waiting for something that will never come.",
    "No utility. No purpose. Just vibes.",
    "Even this message means nothing.",
    "Stay unready.",
    "You came here for meaning? LOL.",
    "The real value is in the emptiness.",
    "We KNOT. That's all.",
    "Imagine a meme. Now delete it. That’s us.",
    "0xKNOTHING: not even trying.",
    "This isn’t a launch. It’s a loop.",
    "Not a rug. Not a moon. Not a thing."
  ];

  function appendRandomMessage() {
    const container = document.getElementById("messageScroll");
    const msg = document.createElement("div");
    msg.className = "message-line";
    msg.textContent = messages[Math.floor(Math.random() * messages.length)];
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  }

  setInterval(appendRandomMessage, 3000);
  appendRandomMessage();

  // 🕒 Countdown
  let countdownTime = 86400;

  function infiniteCountdown() {
    let hours = Math.floor(countdownTime / 3600);
    let minutes = Math.floor((countdownTime % 3600) / 60);
    let seconds = countdownTime % 60;

    document.getElementById("countdownDisplay").textContent =
      `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;

    countdownTime--;
    if (countdownTime <= 0) countdownTime = 86400;
  }

  setInterval(infiniteCountdown, 1000);
  infiniteCountdown();
});
