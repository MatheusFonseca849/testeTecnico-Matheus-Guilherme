const resetResults = (): void => {
  const display = document.getElementById("display");
  if (display) {
    display.innerHTML = "";
  }
};

const createTemplate = (): HTMLDivElement => {
  const div = document.createElement("div");
  div.className = "outputField";
  return div;
};

const showTemplate = (template: HTMLDivElement): void => {
  const display = document.getElementById("display");
  if (display) {
    display.append(template);
  }
};

export { resetResults, createTemplate, showTemplate };
