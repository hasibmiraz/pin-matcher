document
  .getElementById("generate-pin-btn")
  .addEventListener("click", function () {
    const pin = Math.round(1000 + Math.random() * 9000);
    document.getElementById("random-pin").value = pin;
  });

document.getElementById("keypad").addEventListener("click", function (e) {
  const number = e.target.innerText;
  const calc = document.getElementById("typed-pin");

  if (isNaN(number)) {
    if (number === "C") {
      calc.value = "";
    } else if (number === "<") {
      const stringValue = calc.value.toString();
      calc.value = stringValue.substring(0, stringValue.length - 1);
    }
  } else {
    calc.value += number;
  }
});

function pinSubmit(success, fail) {
  document.getElementById("pin-success").style.display = success;
  document.getElementById("pin-fail").style.display = fail;
  document.getElementById("typed-pin").value = "";
}

document.getElementById("submit-pin").addEventListener("click", function () {
  const generatedPin = document.getElementById("random-pin").value;
  const typedPin = document.getElementById("typed-pin").value;

  if (generatedPin == typedPin && generatedPin.length !== 0) {
    pinSubmit("block", "none");
  } else {
    pinSubmit("none", "block");
  }
});
