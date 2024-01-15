const display = document.getElementById("display");

function append(input) {
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error! Wrong input.";
  }
}

function clearDisplay() {
  display.value = "";
}
