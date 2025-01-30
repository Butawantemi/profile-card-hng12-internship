/* This script will update the time on the page every second. */

const updateTime =() => {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    utcTimeElement.textContent = `Current UTC Time: ${now}`;
}
updateTime();
