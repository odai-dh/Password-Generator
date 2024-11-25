const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePasswords() {
    // Get the length input from the user
    const lengthInput = document.getElementById("password-length").value;
    const passwordLength = parseInt(lengthInput) || 15; // Default to 15 if input is invalid

    document.getElementById("password1").textContent = generateRandomPassword(passwordLength);
    document.getElementById("password2").textContent = generateRandomPassword(passwordLength);
}

function generateRandomPassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
function copyToClipboard(passwordId) {
  // Get the password text
  const passwordText = document.getElementById(passwordId).textContent;

  // Use the Clipboard API to copy the text
  navigator.clipboard.writeText(passwordText).then(() => {
      // Show a "Copied" message
      const passwordBox = document.getElementById(passwordId);
      const message = document.createElement("span");
      message.className = "copied-message"; // Assign CSS class

      message.textContent = "Copied!";
      passwordBox.appendChild(message);

      // Make the message visible
      setTimeout(() => {
          message.style.opacity = "1"; // Keep this to control animation
      }, 10);

      // Remove the message after 2 seconds
      setTimeout(() => {
          message.remove();
      }, 2000);
  }).catch(err => {
      console.error("Failed to copy password: ", err);
  });
}