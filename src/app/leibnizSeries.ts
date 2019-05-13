const LeibnizSeries = () => {
  const base: HTMLElement = document.createElement("div");
  const inputBox: HTMLInputElement = document.createElement("input");
  inputBox.setAttribute("type", "text");
  const info: HTMLElement = document.createElement("h3");
  info.innerText = "Calculating Sum of odds numbers";
  const answer: HTMLLabelElement = document.createElement("label");

  const submit: HTMLElement = document.createElement("button");
  submit.innerText = "Submit";
  base.appendChild(info);
  base.appendChild(inputBox);
  base.appendChild(submit);
  submit.onclick = () => {
    const input = +inputBox.value;
    let v = 1;
    let sum = 0;
    for (let i = 1; i <= input; i++) {
      sum += v * (1 / (i * 2 - 1));
      v *= -1;
    }
    sum *= 4;
    answer.textContent = sum.toString();
    base.appendChild(answer);
  };

  const app = document.getElementById("app");
  app.appendChild(base);
};

export { LeibnizSeries };
