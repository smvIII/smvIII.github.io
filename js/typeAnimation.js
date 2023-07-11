// Define a function to handle the typing animation

// function type(command) {
//   let letterCount = 0;
//   let currentOutput = "";
//   let typingEffect = setInterval(function () {
//     if (letterCount < command.length) {
//       currentOutput += command.charAt(letterCount);
//       document.getElementById("command").innerHTML = currentOutput;
//       letterCount++;
//     } else {
//       clearInterval(typingEffect);
//     }
//   }, 200);
// }

// // Add event listener for the 'Projects' link
// document
//   .getElementById("projects-link")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("Projects link from home clicked");
//     type("cd projects");
//     setTimeout(function () {
//       window.location.href = e.target.href;
//     }, 200 * "cd projects".length + 500);
//   });

// // Add event listener for the 'Skills' link
// document.getElementById("skills-link").addEventListener("click", function (e) {
//   e.preventDefault();

//   type("cd skills");
//   setTimeout(function () {
//     window.location.href = e.target.href;
//   }, 200 * "cd skills".length + 500);
// });

// // Add event listener for the 'home' link
// document.getElementById("home-link").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("Home link clicked");
//   type("cd ..");
//   setTimeout(function () {
//     window.location.href = e.target.href;
//   }, 200 * "cd ..".length + 500);
// });
document.addEventListener("DOMContentLoaded", function () {
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
    ?.addEventListener("click", function (e) {
      e.preventDefault();
      type("cd projects");
      setTimeout(function () {
        window.location.href = e.target.href;
      }, 200 * "cd projects".length + 500);
    });

  // Add event listener for the 'Skills' link
  document
    .getElementById("skills-link")
    ?.addEventListener("click", function (e) {
      e.preventDefault();
      type("cd skills");
      setTimeout(function () {
        window.location.href = e.target.href;
      }, 200 * "cd skills".length + 500);
    });

  // Add event listener for the 'home' link
  document.getElementById("home-link")?.addEventListener("click", function (e) {
    e.preventDefault();
    type("cd ..");
    setTimeout(function () {
      window.location.href = e.target.href;
    }, 200 * "cd ..".length + 500);
  });

  // Add event listener for the 'skills' link clicked from projects page
  document
    .getElementById("skills-link-projects")
    ?.addEventListener("click", function (e) {
      e.preventDefault();
      type("cd ../skills");
      setTimeout(function () {
        window.location.href = e.target.href;
      }, 200 * "cd ../skills".length + 500);
    });

  // Add event listener for the 'projects' link clicked from skills page
  document
    .getElementById("projects-link-skills")
    ?.addEventListener("click", function (e) {
      e.preventDefault();
      type("cd ../projects");
      setTimeout(function () {
        window.location.href = e.target.href;
      }, 200 * "cd ../projects".length + 500);
    });
});
