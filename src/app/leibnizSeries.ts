const LeibnizSeries = () => {
  const base: HTMLElement = document.createElement("div");
  const inputBox: HTMLInputElement = document.createElement("input");
  inputBox.setAttribute("type", "text");
  const info: HTMLElement = document.createElement("h3");
  info.innerText = "Calculating Sum of Leibniz Series";
  const answer: HTMLLabelElement = document.createElement("label");

  const submit: HTMLElement = document.createElement("button");
  submit.innerText = "Submit";
  base.appendChild(info);
  base.appendChild(inputBox);
  base.appendChild(submit);
  submit.onclick = () => {
    const input = +inputBox.value;
    answer.textContent = sumOdds(input).toString();
    base.appendChild(answer);
  };
  const app = document.getElementById("app");
  app.appendChild(base);
};
function sumOdds(input: number): number {
  let sum = 0;
  let v = 1;
  for (let i = 1; i <= input; i++) {
    sum += v * (1 / (i * 2 - 1));
    v *= -1;
  }
  sum *= 4;
  return sum;
}
export { LeibnizSeries };
