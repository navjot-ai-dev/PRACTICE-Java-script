const clock = document.getElementById("clock");
const date = document.getElementById("date");
const ampm = document.getElementById("ampm");

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    clock.textContent =
      `${String(hours).padStart(2,"0")}:` +
      `${String(minutes).padStart(2,"0")}:` +
      `${String(seconds).padStart(2,"0")}`;

    ampm.textContent = period;

    date.textContent = now.toDateString();
}

setInterval(updateClock, 1000);
updateClock();