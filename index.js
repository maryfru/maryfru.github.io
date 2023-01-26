const r1 = fetch("skills.json");
r1.then(function (raspuns) {
  const r2 = raspuns.json();
  r2.then(function (skills) {
    displaySkills(skills);
  });
});

function displaySkills(skills) {
  const skillsHTML = skills.map(function (skill) {
    return `<li>${skill.name} - <span>${skill.endorcements}</span></li>`;
  });

  const skillsEl = document.getElementById("skills-list");
  skillsEl.innerHTML = skillsHTML.join("");
}

function hideAllPages() {
  const pages = document.querySelectorAll(".page");
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
        const id = e.target.getAttribute("data-page");
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
