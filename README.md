# Color Palette Generator

## Overview
The **Color Palette Generator** is a simple and interactive web tool that generates random color palettes, allows users to copy color codes with a single click, and dynamically updates the background with the selected color. This project is built using **HTML, CSS, and JavaScript**.

## Features
- Generates **random color palettes** with each refresh.
- **Click a color** to copy its hex code to the clipboard.
- The background updates to the **selected color**.
- A **toast notification** confirms successful copying.
- Saves the **last selected background color** to local storage.
- **Mobile responsive**: Colors are displayed in a grid format with 2 columns on smaller screens.

## Technologies Used
- **HTML5** for structuring the page.
- **CSS3** for styling and responsive design.
- **JavaScript (ES6)** for dynamic functionality.

## Installation & Usage
1. Clone this repository:
   ```sh
   git clone https://github.com/tejHacks/color-palette-generator.git
   ```
2. Navigate to the project folder:
   ```sh
   cd color-palette-generator
   ```
3. Open `index.html` in your browser.

## How It Works
- Click the **"Refresh Palette"** button to generate a new set of colors.
- Click on any color box to **copy the hex code** and change the background.
- A **toast notification** appears, confirming the copied color.
- The last selected background color is **saved** and applied when you reload the page.

## Project Structure
```
color-palette-generator/
|__font-awesome/ #folder for font awesome files
│── index.html       # Main HTML file
│── style.css        # Stylesheet
│── script.js        # JavaScript functionality
│── README.md        # Project documentation
```

## Contributions
Pull requests are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a PR.

## License
This project is **open-source** under the MIT License.

---
### Author
👨‍💻 **tejHacks**  
GitHub: [tejHacks](https://github.com/tejHacks)

