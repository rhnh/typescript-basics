const harmonicSeries = () => {
  const base: HTMLElement = document.createElement("div");
  const btn = document.getElementById("harmonic");
  let result: number = 0;
  let resultMessage: string = "";
  const inputBox1: HTMLInputElement = document.createElement("input");
  inputBox1.setAttribute("type", "text");
  const info: HTMLElement = document.createElement("h3");
  info.innerText = "Calculates the Harmonic series up to";
  base.appendChild(info);

  const submit: HTMLElement = document.createElement("button");
  submit.innerText = "Submit";
  base.appendChild(inputBox1);
  base.appendChild(submit);

  let tmp: number = 0;
  const div: HTMLElement = document.createElement("div");
  const answer: HTMLLabelElement = document.createElement("label");

  submit.onclick = () => {
    result = +inputBox1.value;
    if (result <= 0) {
      console.log((resultMessage = "The Number should be > 0"));
      return;
    }

    for (let i: number = 1; i <= result; i++) {
      tmp += 1 / i;
    }
    answer.textContent = resultMessage + +tmp;

    div.appendChild(answer);
    base.appendChild(div);
    tmp = 0;
  };
  const app: HTMLElement = document.getElementById("app");
  app.appendChild(base);
};

export { harmonicSeries };
