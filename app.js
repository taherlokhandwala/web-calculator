window.addEventListener("load", () => {
  const answerBox = document.querySelector(".answer-box");
  const clear = document.querySelector(".clear");
  const del = document.querySelector(".delete");
  const numbers = document.querySelectorAll(".number");
  const operators = document.querySelectorAll(".operator");
  const multiply = document.querySelector(".multiply");
  const decimal = document.querySelector(".decimal");
  const equals = document.querySelector(".equals");

  clear.addEventListener("click", () => {
    answerBox.value = "";
  });

  numbers.forEach(number => {
    number.addEventListener("click", () => {
      answerBox.value += number.textContent;
    });
  });

  operators.forEach(operator => {
    operator.addEventListener("click", () => {
      answerBox.value += operator.textContent;
    });
  });

  del.addEventListener("click", () => {
    answerBox.value = answerBox.value.slice(0, answerBox.value.length - 1);
  });

  multiply.addEventListener("click", () => {
    answerBox.value += "*";
  });

  decimal.addEventListener("click", () => {
    answerBox.value += ".";
  });

  equals.addEventListener("click", () => {
    try {
      answerBox.value = eval(answerBox.value);
    } catch {
      answerBox.value = "Error";
    }
  });
});
