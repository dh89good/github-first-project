const checkboxes = [...document.querySelectorAll("[data-step]")];
const progressText = document.querySelector("#progress-text");
const progressBar = document.querySelector("#progress-bar");
const storageKey = "github-first-project-progress";

function loadProgress() {
  try {
    return new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));
  } catch {
    return new Set();
  }
}

function updateProgress() {
  const completed = checkboxes.filter((box) => box.checked).map((box) => box.dataset.step);
  localStorage.setItem(storageKey, JSON.stringify(completed));
  progressText.textContent = `${completed.length} / ${checkboxes.length} 已完成`;
  progressBar.style.width = `${(completed.length / checkboxes.length) * 100}%`;
}

const saved = loadProgress();
checkboxes.forEach((box) => {
  box.checked = saved.has(box.dataset.step);
  box.addEventListener("change", updateProgress);
});

updateProgress();
