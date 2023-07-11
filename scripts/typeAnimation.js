// Define a function to handle the typing animation
function type(command) {
  let letterCount = 0;
  let currentOutput = "";
  let typingEffect = setInterval(function () {
    if (letterCount < command.length) {
      currentOutput += command.charAt(letterCount);
      document.getElementById("command").innerHTML = currentOutput;
      letterCount++;
    } else {
      clearInterval(typingEffect);
    }
  }, 200);
}

// Add event listener for the 'Projects' link
document
  .getElementById("projects-link")
  .addEventListener("click", function (e) {
    e.preventDefault();
    type("cd projects");
    setTimeout(function () {
      window.location.href = e.target.href;
    }, 200 * "cd projects".length + 500);
  });

// Add event listener for the 'Skills' link
document.getElementById("skills-link").addEventListener("click", function (e) {
  e.preventDefault();
  type("cd skills");
  setTimeout(function () {
    window.location.href = e.target.href;
  }, 200 * "cd skills".length + 500);
});
