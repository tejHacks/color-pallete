const refreshButton = document.querySelector(".refresh-btn");
const containerBody = document.querySelector(".container");
const maxPaletteBoxes = 60; // Reduced for performance
const toast = document.createElement("div");
toast.classList.add("toast");
document.body.appendChild(toast);

// Load last selected background color
const lastBgColor = localStorage.getItem("bgColor");
if (lastBgColor) document.body.style.background = lastBgColor;

const generatePalette = () => {
    containerBody.innerHTML = "";
    for (let i = 0; i < maxPaletteBoxes; i++) {
        let randomHexCode = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`;
        
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHexCode}"></div>
                          <span class="hex-value">${randomHexCode}</span>`;
        
        // Click event to copy and change background
        color.addEventListener("click", () => copyColorCode(color, randomHexCode));
        containerBody.appendChild(color);
    }
};

generatePalette();

const copyColorCode = (element, hexValue) => {
    const colorElem = element.querySelector(".hex-value");
    navigator.clipboard.writeText(hexValue).then(() => {
        colorElem.innerHTML = "Copied!";
        document.body.style.background = hexValue; // Change background
        localStorage.setItem("bgColor", hexValue); // Save in localStorage
        showToast(`Color ${hexValue} copied!`);
        setTimeout(() => colorElem.innerHTML = hexValue, 3000);
    }).catch(() => alert("Failed to copy the color code"));
};

const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
};

refreshButton.addEventListener("click", generatePalette);
setTimeout(generatePalette, 200000);
