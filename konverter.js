function convertTemperature() {
  let celcius = parseFloat(document.getElementById("celcius").value);
  if (isNaN(celcius)) {
    alert("Masukkan nilai suhu dalam angka");
    return;
  }
  let fahrenheit = (celcius * 9 / 5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2) + " °F";
  document.getElementById("penjelasan").value =
    `${celcius}°C dikonversi ke Fahrenheit:\n(${celcius} × 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function resetForm() {
  document.getElementById("celcius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("penjelasan").value = "";
}

function reverseConversion() {
  let fahrenheit = parseFloat(document.getElementById("celcius").value);
  if (isNaN(fahrenheit)) {
    alert("Masukkan nilai suhu dalam angka");
    return;
  }
  let celcius = (fahrenheit - 32) * 5 / 9;
  document.getElementById("fahrenheit").value = celcius.toFixed(2) + " °C";
  document.getElementById("penjelasan").value =
    `${fahrenheit}°F dikonversi ke Celcius:\n(${fahrenheit} - 32) × 5/9 = ${celcius.toFixed(2)}°C`;
}
