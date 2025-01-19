const resetResults = () => {
    const display = document.getElementById("display");
    if (display) {
        display.innerHTML = "";
    }
};
const createTemplate = () => {
    const div = document.createElement("div");
    div.className = "outputField";
    return div;
};
const showTemplate = (template) => {
    const display = document.getElementById("display");
    if (display) {
        display.append(template);
    }
};
export { resetResults, createTemplate, showTemplate };
//# sourceMappingURL=utils.js.map