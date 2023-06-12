const orderButtons = document.querySelectorAll(".order");
const speed = document.querySelector('.order[value="speed"]');
const cheap = document.querySelector('.order[value="cheap"]');
const quality = document.querySelector('.order[value="quality"]');

orderButtons.forEach((element) => {
  element.addEventListener("click", orderFunction);
});

function orderFunction() {
  if (this.value === "speed" && quality.checked) {
    cheap.checked = false;
    return true;
  }
  if (this.value === "speed" && cheap.checked) {
    quality.checked = false;
    return true;
  }

  if (this.value === "cheap" && speed.checked) {
    quality.checked = false;
    return true;
  }
  if (this.value === "cheap" && quality.checked) {
    speed.checked = false;
    return true;
  }

  if (this.value === "quality" && speed.checked) {
    cheap.checked = false;
    return true;
  }
  if (this.value === "quality" && cheap.checked) {
    speed.checked = false;
    return true;
  }
}
