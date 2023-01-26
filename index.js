var skillsEl = document.getElementById("skills-list");

var skills = [];

var r1 = fetch("skills.json");
r1.then(function (raspuns) {
  var r2 = raspuns.json();
  r2.then(function (skills) {
    displaySkills(skills);
  });
});

function displaySkills(skills) {
  var skillsHTML = skills.map(function (skill) {
    return `<li>${skill.name} - <span>${skill.endorcements}</span></li>`;
  });

  skillsEl.innerHTML = skillsHTML.join("");
}

var pageIds = ["home", "skills", "languages", "projects"];

function hideAllPages() {
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
    hide(page.id);
  });
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

function initMenu() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        // var id = e.target.dataset.page;
        displayPage(id);
      }
    });
}

displayPage("skills");
initMenu();

/* creppy-cat confetti party */

const catPic = document.querySelector("#creepy-cat");
const canvas = document.querySelector("#confetti");

const jsConfetti = new JSConfetti();

catPic.addEventListener("click", () => {
  document.body.style.backgroundColor = "#F2EFEA";

  setTimeout(function () {
    document.body.style.background = "#000000";
  }, 3000);

  jsConfetti.addConfetti();
});

/* Combine different properties: using
{
  emojis: ["🦄", "🌸"],
  emojiSize: 100,
  confettiNumber: 30,
} */
