const generateBtn = document.getElementById("generate-btn");
const palatteContainer = document.querySelector(".palatte-container");
const copyBtn = document.querySelector(".copy-btn");

generateBtn.addEventListener("click", generatePalatte);

palatteContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-btn")) {
    const hexValue = e.target.previousElementSibling.textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess(e.target))
      .catch((e) => console.log(e));
  } else if (e.target.classList.contains("color")) {
    const hexValue =
      e.target.nextElementSibling.querySelector(".hex-value").textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(() =>
        showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn"))
      )
      .catch((e) => console.log(e));
  }
});

function generatePalatte() {
  const colors = [];
  console.log("function called");

  for (let i = 0; i < 5; i++) {
    colors.push(generateRandomeColor());
  }

  updatePalatte(colors);
}

generatePalatte();

function generateRandomeColor() {
  const letters = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function updatePalatte(colors) {
  const colorBoxs = document.querySelectorAll(".color-box");
  colorBoxs.forEach((box, index) => {
    const color = colors[index];
    const colorBox = box.querySelector(".color");
    const hexValue = box.querySelector(".hex-value");
    colorBox.style.backgroundColor = color;
    hexValue.textContent = color;
  });
}

function showCopySuccess(e) {
  e.classList.remove("far", "fa-copy");
  e.classList.add("fas", "fa-check");
  e.style.color = "#48bb78";

  setTimeout(() => {
    e.classList.remove("fas", "fa-check");
    e.classList.add("far", "fa-copy");
    e.style.color = "#64748b";
  }, 1000);
}
