document.addEventListener("DOMContentLoaded", () => {
    const tempInput = document.getElementById("temp-input");
    const fromUnit = document.getElementById("from-unit");
    const toUnit = document.getElementById("to-unit");
    const convertBtn = document.getElementById("convert-btn");
    const resultDiv = document.getElementById("result");

    const enableButton = () => {
        if (tempInput.value && fromUnit.value && toUnit.value) {
          convertBtn.disabled = false;
        } else {
          convertBtn.disabled = true;
        }
      };
      tempInput.addEventListener("input", enableButton);
      fromUnit.addEventListener("change", enableButton);
      toUnit.addEventListener("change", enableButton);
    // Conversion logic
  const convertTemperature = (temp, from, to) => {
    if (from === to) return temp;

    if (from === "Celsius") {
      if (to === "Fahrenheit") return (temp * 9/5) + 32;
      if (to === "Kelvin") return temp + 273.15;
    }

    if (from === "Fahrenheit") {
      if (to === "Celsius") return (temp - 32) * 5/9;
      if (to === "Kelvin") return (temp - 32) * 5/9 + 273.15;
    }

    if (from === "Kelvin") {
      if (to === "Celsius") return temp - 273.15;
      if (to === "Fahrenheit") return (temp - 273.15) * 9/5 + 32;
    }

    return null;
  };

  // Handle conversion
  convertBtn.addEventListener("click", () => {
    const temp = parseFloat(tempInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (isNaN(temp)) {
      resultDiv.textContent = "Please enter a valid number for temperature.";
      return;
    }

    const convertedTemp = convertTemperature(temp, from, to);
    resultDiv.textContent = `${temp}° ${from} is ${convertedTemp.toFixed(2)}° ${to}`;
  });
});