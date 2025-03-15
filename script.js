const refreshButton = document.querySelector(".refresh-btn");
const containerBody = document.querySelector(".container");
const maxPaletteBoxes = 60; // Reduced for performance

// Create toast notification element
const toast = document.createElement("div");
toast.classList.add("toast");
document.body.appendChild(toast);

// Load last selected background color from localStorage
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
        
        // Click event to copy color and change background
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
        showToast(`🎨 Color ${hexValue} copied!`); // Show toast
        setTimeout(() => colorElem.innerHTML = hexValue, 3000);
    }).catch(() => alert("Failed to copy the color code"));
};

// Toast notification function
const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("show");
    
    // Hide the toast after 2 seconds
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
};

// Add a click listener to refresh the palette
refreshButton.addEventListener("click", generatePalette);

// Generate a new palette every 2 minutes
setTimeout(generatePalette, 200000);
