// Powers the checklist on index.html.
// Saves ticked state in localStorage so it survives a refresh/reboot
// while you're revising. Nothing here is sent anywhere - it only
// ever touches this browser.

(function () {
  const STORAGE_KEY = "exam-prep-checklist-v1";

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (err) {
      return {};
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      // storage might be unavailable (private browsing etc) - fail quietly
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".checklist input[type='checkbox']");
    const state = loadState();

    boxes.forEach((box) => {
      const id = box.dataset.id;
      if (state[id]) {
        box.checked = true;
        box.closest("li").classList.add("done");
      }
      box.addEventListener("change", () => {
        state[id] = box.checked;
        saveState(state);
        box.closest("li").classList.toggle("done", box.checked);
      });
    });

    const resetBtn = document.getElementById("reset-checklist");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        localStorage.removeItem(STORAGE_KEY);
        boxes.forEach((box) => {
          box.checked = false;
          box.closest("li").classList.remove("done");
        });
      });
    }
  });
})();
