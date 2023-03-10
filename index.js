const r1 = fetch("skills.json");
r1.then((raspuns) => {
  const r2 = raspuns.json();
  r2.then((skills) => {
    displaySkills(skills);
  });
});

function displaySkills(skills) {
  const skillsHTML = skills.map((skill) => {
    return `<li>${skill.name} - <span>${skill.endorcements}</span></li>`;
  });

  const skillsEl = document.getElementById("skills-list");
  skillsEl.innerHTML = skillsHTML.join("");
}

function hideAllPages() {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
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
  document.getElementById("top-menu-bar").addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      const id = e.target.getAttribute("data-page");
      displayPage(id);
    }
  });
}
/* FORM - Wave Animation for side-menu */

const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

/* Hidden secret toggle button */

function toggleSecret() {
  const secret = document.getElementById("hidden-message");
  if (secret.style.display === "block") {
    secret.style.display = "none";
  } else {
    secret.style.display = "block";
  }
}

displayPage("home");
initMenu();

const f1 = function () {
  return "arrow";
};

const f2 = () => {
  return "arrow";
};

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
  emojis: ["????", "????"],
  emojiSize: 100,
  confettiNumber: 30,
} */
