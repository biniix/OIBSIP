// === Temperature Converter Logic ===

// --- DOM refs ---
const degreesInput = document.getElementById("degrees-input");
const convertBtn = document.getElementById("convert-btn");
const inputError = document.getElementById("input-error");
const results = document.getElementById("results");

const valCelsius = document.getElementById("val-celsius");
const valFahrenheit = document.getElementById("val-fahrenheit");
const valKelvin = document.getElementById("val-kelvin");

const resultCardC = document.getElementById("result-celsius");
const resultCardF = document.getElementById("result-fahrenheit");
const resultCardK = document.getElementById("result-kelvin");

// --- Custom dropdown refs ---
const customSelect = document.getElementById("custom-select");
const csTrigger = document.getElementById("cs-trigger");
const csOptions = document.getElementById("cs-options");
const csValue = document.getElementById("cs-value");
const csDot = document.getElementById("cs-dot");
const csOptionEls = document.querySelectorAll(".cs-option");

// Current selected unit
let selectedUnit = "fahrenheit";

// Unit display config
const unitConfig = {
  celsius: { label: "Celsius (°C)", dotClass: "dot-celsius" },
  fahrenheit: { label: "Fahrenheit (°F)", dotClass: "dot-fahrenheit" },
  kelvin: { label: "Kelvin (K)", dotClass: "dot-kelvin" },
};

// --- Custom dropdown logic ---

function openDropdown() {
  customSelect.classList.add("open");
}

function closeDropdown() {
  customSelect.classList.remove("open");
}

function toggleDropdown() {
  customSelect.classList.contains("open") ? closeDropdown() : openDropdown();
}

function selectUnit(unit) {
  selectedUnit = unit;

  // Update trigger display
  const cfg = unitConfig[unit];
  csValue.textContent = cfg.label;
  csDot.className = "cs-dot " + cfg.dotClass;

  // Mark active option
  csOptionEls.forEach((el) => {
    el.classList.toggle("cs-option--active", el.dataset.value === unit);
  });

  closeDropdown();
}

// Trigger click
csTrigger.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleDropdown();
});

// Option click
csOptionEls.forEach((el) => {
  el.addEventListener("click", () => selectUnit(el.dataset.value));
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!customSelect.contains(e.target)) closeDropdown();
});

// Keyboard accessibility
customSelect.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleDropdown();
  }
  if (e.key === "Escape") closeDropdown();
});

// Init trigger dot
selectUnit("fahrenheit");

// --- Conversion functions ---

function toCelsius(value, from) {
  if (from === "celsius") return value;
  if (from === "fahrenheit") return ((value - 32) * 5) / 9;
  if (from === "kelvin") return value - 273.15;
}

function toFahrenheit(value, from) {
  if (from === "fahrenheit") return value;
  if (from === "celsius") return (value * 9) / 5 + 32;
  if (from === "kelvin") return ((value - 273.15) * 9) / 5 + 32;
}

function toKelvin(value, from) {
  if (from === "kelvin") return value;
  if (from === "celsius") return value + 273.15;
  if (from === "fahrenheit") return ((value - 32) * 5) / 9 + 273.15;
}

// Round to 4 decimal places, strip trailing zeros
function fmt(num) {
  return parseFloat(num.toFixed(4)).toString();
}

// Pop animation on a value element
function animatePop(el) {
  el.classList.remove("pop");
  void el.offsetWidth;
  el.classList.add("pop");
}

// Hide the source unit card, show the other two
function updateResultVisibility(from) {
  const allCards = [
    { card: resultCardC, key: "celsius" },
    { card: resultCardF, key: "fahrenheit" },
    { card: resultCardK, key: "kelvin" },
  ];
  allCards.forEach(({ card, key }) => {
    card.style.display = key === from ? "none" : "";
  });
}

// --- Main convert handler ---
function handleConvert() {
  const raw = degreesInput.value.trim();
  const from = selectedUnit;

  // Validate
  if (raw === "" || isNaN(Number(raw))) {
    degreesInput.classList.add("error");
    inputError.classList.add("visible");
    degreesInput.focus();
    return;
  }

  // Clear error
  degreesInput.classList.remove("error");
  inputError.classList.remove("visible");

  const value = parseFloat(raw);

  // Calculate
  const c = toCelsius(value, from);
  const f = toFahrenheit(value, from);
  const k = toKelvin(value, from);

  // Update display
  valCelsius.textContent = fmt(c) + " °C";
  valFahrenheit.textContent = fmt(f) + " °F";
  valKelvin.textContent = fmt(k) + " K";

  // Animations
  animatePop(valCelsius);
  animatePop(valFahrenheit);
  animatePop(valKelvin);

  updateResultVisibility(from);

  // Show results panel
  results.classList.add("visible");
}

// --- Event listeners ---
convertBtn.addEventListener("click", handleConvert);

degreesInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleConvert();
});

degreesInput.addEventListener("input", () => {
  if (degreesInput.classList.contains("error")) {
    degreesInput.classList.remove("error");
    inputError.classList.remove("visible");
  }
});
