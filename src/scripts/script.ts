import { exercicio2, exercicio3, exercicio4, exercicio5 } from "./respostas.js";
import { resetResults, createTemplate, showTemplate } from "./utils.js";

const exercise2 = (): void => {
  resetResults();
  const template = createTemplate();

  const form = document.createElement("form");
  form.className = "outputForm";

  const label = document.createElement("label");
  label.innerHTML =
    "Insira um número para verificar se ele está na sequência Fibonacci:";

  const input = document.createElement("input");
  input.type = "number";
  input.min = "0";
  input.placeholder = "Digite um número";
  input.required = true;
  input.addEventListener("input", (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = Number(target.value);
    if (
      value < 0 ||
      value === undefined ||
      value === null ||
      value.toString() === "" ||
      value.toString().length === 0 ||
      Number.isNaN(value)
    ) {
      alert("Insira um número positivo");
      target.value = "0";
    }
  });

  const btn = document.createElement("button");
  btn.innerHTML = "Verificar";

  const result = document.createElement("p");

  btn.addEventListener("click", (e: Event) => {
    e.preventDefault();
    if (!input.value || input.value.trim() === "") {
      alert("Insira um número positivo");
      return;
    }
    const userInput = Number(input.value);
    const answer = exercicio2(userInput);
    result.innerHTML = answer
      ? `O número ${userInput} pertence a sequência Fibonacci`
      : `O número ${userInput} não pertence a sequência Fibonacci`;
  });

  label.append(input);
  form.append(label, btn);
  template.append(form, result);
  showTemplate(template);
};

const exercise3 = (): void => {
  resetResults();
  const template = createTemplate();

  const p = document.createElement("p");
  p.innerHTML = "Clique no botão abaixo para calcular os valores solicitados:";
  const result = document.createElement("p");

  const btn = document.createElement("button");
  btn.innerHTML = "Calcular";
  btn.addEventListener("click", (e: Event) => {
    e.preventDefault();
    const answer = exercicio3();
    result.innerHTML = `O menor valor de faturamento no mês foi de R$: ${answer[0]} e o de maior faturamento foi R$: ${answer[1]}. O faturamento foi superior a média mensal em ${answer[2]} dias.`;
  });

  template.append(p, btn, result);
  showTemplate(template);
};

const exercise4 = (): void => {
  resetResults();
  const template = createTemplate();

  const answer = exercicio4();

  const p = document.createElement("div");
  const ul = document.createElement("ul");
  p.innerHTML = "A porcentagem de faturamento para cada estado é:";

  for (const state of answer) {
    const li = document.createElement("li");
    li.innerHTML = `${state.state} - ${state.percentage}%`;
    ul.append(li);
  }

  p.append(ul);
  template.append(p);
  showTemplate(template);
};

const exercise5 = (): void => {
  resetResults();
  const template = createTemplate();

  const form = document.createElement("form");

  const label = document.createElement("label");
  label.innerHTML = "Insira uma string para invertê-la:";

  const input = document.createElement("input");
  input.type = "text";

  const result = document.createElement("p");

  const btn = document.createElement("button");
  btn.innerHTML = "Inverter";
  btn.addEventListener("click", (e: Event) => {
    e.preventDefault();
    const userInput = input.value;
    const answer = exercicio5(userInput);
    result.innerHTML = `String invertida: ${answer}`;
  });

  label.append(input);
  form.append(label, btn);
  template.append(form, result);
  showTemplate(template);
};

// Initialize event listeners when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const buttons = {
    btn2: document.getElementById("btn_2"),
    btn3: document.getElementById("btn_3"),
    btn4: document.getElementById("btn_4"),
    btn5: document.getElementById("btn_5"),
  };

  if (buttons.btn2) {
    buttons.btn2.addEventListener("click", () => exercise2());
  }

  if (buttons.btn3) {
    buttons.btn3.addEventListener("click", () => exercise3());
  }

  if (buttons.btn4) {
    buttons.btn4.addEventListener("click", () => exercise4());
  }

  if (buttons.btn5) {
    buttons.btn5.addEventListener("click", () => exercise5());
  }
});
