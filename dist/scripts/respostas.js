import dados from "../database/dados.js";
export const exercicio2 = (input) => {
    // Verifica se o input é um número positivo, vazio ou NaN
    if (input < 0 ||
        Number.isNaN(input) ||
        input === undefined ||
        input === null ||
        input.toString() === "") {
        alert("Insira um número positivo");
        // Retorna falso se o input for inválido
        return false;
    }
    // Inicializa o array com os dois primeiros dígitos da sequência de Fibonacci
    const fibonacciArray = [0, 1];
    // Inicializa um contador para percorrer o array
    let counter = fibonacciArray[fibonacciArray.length - 1] +
        fibonacciArray[fibonacciArray.length - 2];
    // Enquanto o contador for menor ou igual ao input, adiciona os dígitos ao array
    while (counter <= input) {
        counter =
            fibonacciArray[fibonacciArray.length - 1] +
                fibonacciArray[fibonacciArray.length - 2];
        fibonacciArray.push(counter);
    }
    // Verifica se o número está na sequência de Fibonacci
    let isOnFibonacci = false;
    for (let i = 0; i < fibonacciArray.length; i++) {
        if (fibonacciArray[i] === input) {
            isOnFibonacci = true;
            break;
        }
    }
    return isOnFibonacci;
};
export const exercicio3 = () => {
    // Filtra os valores maiores que 0
    const filteredSales = dados.filter((dado) => dado.valor > 0.0);
    // Verifica se o array filtrado está vazio
    if (filteredSales.length === 0) {
        return [0, 0, 0];
    }
    // Inicializa as variáveis
    let smallestValue = filteredSales[0].valor;
    let greaterValue = filteredSales[0].valor;
    let aboveAvg = 0;
    // Calcula a média
    const sum = filteredSales.reduce((a, b) => a + b.valor, 0);
    const avg = sum / filteredSales.length;
    // Percorre o array filtrado para encontrar o maior e o menor valor
    for (const sale of filteredSales) {
        const value = sale.valor;
        if (value > greaterValue) {
            greaterValue = value;
        }
        if (value < smallestValue) {
            smallestValue = value;
        }
        if (value > avg) {
            aboveAvg++;
        }
    }
    return [
        Number(smallestValue.toFixed(2)),
        Number(greaterValue.toFixed(2)),
        aboveAvg,
    ];
};
export const exercicio4 = () => {
    const stateInvoiceArray = [
        {
            state: "SP",
            invoice: 67836.43,
        },
        {
            state: "RJ",
            invoice: 36678.66,
        },
        {
            state: "MG",
            invoice: 29229.88,
        },
        {
            state: "ES",
            invoice: 27165.48,
        },
        {
            state: "Outros",
            invoice: 19848.53,
        },
    ];
    const total = stateInvoiceArray.reduce((a, b) => a + b.invoice, 0);
    return stateInvoiceArray.map((state) => (Object.assign(Object.assign({}, state), { percentage: ((state.invoice * 100) / total).toFixed(2) })));
};
export const exercicio5 = (input) => {
    if (!input) {
        alert("String vazia");
        return "";
    }
    return input.split("").reverse().join("");
};
//# sourceMappingURL=respostas.js.map