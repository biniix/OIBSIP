# 🌡️ Temperature Converter | A Simple Way to Convert Temperatures

> 🏢 **OASIS INFOBYTE — Web Development & Design Internship**
> **Task:** Level 1, Task 3 — Temperature Converter
> **Domain:** Web Development and Design

---

A modern, responsive **Temperature Converter** web app built as part of the **OASIS INFOBYTE Web Development and Design Internship**.

The goal of this project was to design a clean, intuitive, and visually appealing interface that converts temperatures between **Celsius**, **Fahrenheit**, and **Kelvin** — instantly and accurately.

This project focuses on clear UI/UX, smooth micro-animations, accessible interactions, and practical vanilla JavaScript logic.

---

## 🚀 Live Demo

> Open `index.html` in any modern browser — no server or build step required.

---

## ✨ Features

- 🔄 **Bi-directional Conversion** — Convert from any unit (°C, °F, K) to both others simultaneously
- 🎨 **Custom Styled Dropdown** — Fully styleable unit selector (no native `<select>` limitations)
- ✅ **Input Validation** — Clear error state with helpful message for invalid or empty input
- 💫 **Pop Animations** — Smooth result card animation on each conversion
- ⌨️ **Keyboard Accessible** — Press `Enter` to convert; full keyboard navigation on the dropdown
- 📱 **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- 🌌 **Animated Background** — Floating blob shapes for a modern glassmorphism feel
- 🧹 **Smart Result Display** — Hides the source unit card so results are never redundant

---

## 🛠️ Tech Stack

| Technology               | Purpose                                             |
| ------------------------ | --------------------------------------------------- |
| **HTML5**                | Semantic page structure                             |
| **CSS3**                 | Styling, animations, glassmorphism design           |
| **Vanilla JavaScript**   | Conversion logic, DOM manipulation, custom dropdown |
| **Google Fonts (Inter)** | Modern, clean typography                            |

> No frameworks, no libraries, no dependencies — just clean, handcrafted web code.

---

## 📁 Project Structure

```
temperature-converter/
│
├── index.html       # Main HTML structure & layout
├── style.css        # All styles, animations & responsive design
├── script.js        # Conversion logic & interactive behaviour
└── README.md        # Project documentation
```

---

## 🧮 Conversion Formulas

| From → To            | Formula                    |
| -------------------- | -------------------------- |
| Celsius → Fahrenheit | `(°C × 9/5) + 32`          |
| Celsius → Kelvin     | `°C + 273.15`              |
| Fahrenheit → Celsius | `(°F − 32) × 5/9`          |
| Fahrenheit → Kelvin  | `(°F − 32) × 5/9 + 273.15` |
| Kelvin → Celsius     | `K − 273.15`               |
| Kelvin → Fahrenheit  | `(K − 273.15) × 9/5 + 32`  |

---

## 🖥️ How to Use

1. **Clone or download** this repository
2. **Open** `index.html` in your browser
3. **Enter** a temperature value in the input field
4. **Select** the unit you are converting _from_ (Celsius, Fahrenheit, or Kelvin)
5. **Click** the **Convert** button (or press `Enter`)
6. **View** the converted results in the result cards below

---

## 📸 Screenshots

> _Add screenshots of your project here once deployed or demoed._
> Example: `![Temperature Converter UI](./screenshot.png)`

---

## 🎓 Internship Context

This project was completed as part of the **OASIS INFOBYTE Web Development & Design Internship**.

| Detail           | Info                       |
| ---------------- | -------------------------- |
| **Organization** | Oasis Infobyte             |
| **Domain**       | Web Development and Design |
| **Level**        | Level 1                    |
| **Task**         | Temperature Converter      |
| **Type**         | Frontend Web Application   |
