function formatDateTime(date) {
  let day = String(date.getDate()).padStart(2, '0');
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let year = date.getFullYear();
  let hours = String(date.getHours()).padStart(2, '0');
  let minutes = String(date.getMinutes()).padStart(2, '0');
  let seconds = String(date.getSeconds()).padStart(2, '0');
  return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
}

// Function to update the timer display
function updateTimer() {
  let timerElement = document.getElementById('timer');
  let currentDate = new Date();
     timerElement.innerText = formatDateTime(currentDate);
}

// Update the timer initially
updateTimer();

// Update the timer every second
setInterval(updateTimer, 1000);