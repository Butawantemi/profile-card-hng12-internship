// Function to update the UTC time dynamically
const updateTime = () => {
  const utcTimeElement = document.getElementById("utc-time"); // Select the UTC time element
  const now = new Date(); // Get current date and time
  utcTimeElement.textContent = `Current UTC Time: ${now.toUTCString()}`; // Set text content
};

// Call function to update time when the page loads
updateTime();
