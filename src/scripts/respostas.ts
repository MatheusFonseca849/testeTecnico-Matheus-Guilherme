import dados, { DadoFaturamento } from "../database/dados.js";

export const exercicio2 = (input: number): boolean => {

    // Verifica se o input é um número positivo ou NaN
    if (input < 0 || Number.isNaN(input)) {
        alert("Insira um número positivo")
        // Retorna falso se o input for inválido
        return false
    }

    // Inicializa o array com os dois primeiros dígitos da sequência de Fibonacci
    const fibonacciArray: number[] = [0, 1]

    // Inicializa um contador para percorrer o array
    let counter: number = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2]

    // Enquanto o contador for menor ou igual ao input, adiciona os dígitos ao array
    while (counter <= input) {
        counter = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2]
        fibonacciArray.push(counter)
    }

    // Verifica se o número está na sequência de Fibonacci
    let isOnFibonacci: boolean = false
    for (let i = 0; i < fibonacciArray.length; i++) {
        if (fibonacciArray[i] === input) {
            isOnFibonacci = true
            break
        }
    }
    return isOnFibonacci
}

export const exercicio3 = (): number[] => {
    // Filtra os valores maiores que 0
    const filteredSales = dados.filter((dado: DadoFaturamento) => dado.valor > 0.0)
    
    // Verifica se o array filtrado está vazio
    if (filteredSales.length === 0) {
        return [0, 0, 0]
    }

    // Inicializa as variáveis
    let smallestValue: number = filteredSales[0].valor
    let greaterValue: number = filteredSales[0].valor
    let aboveAvg: number = 0

    // Calcula a média
    const sum: number = filteredSales.reduce((a: number, b: DadoFaturamento) => a + b.valor, 0)
    const avg: number = sum / filteredSales.length

    // Percorre o array filtrado para encontrar o maior e o menor valor
    for (const sale of filteredSales) {
        const value = sale.valor
        if (value > greaterValue) {
            greaterValue = value
        }
        if (value < smallestValue) {
            smallestValue = value
        }
        if (value > avg) {
            aboveAvg++
        }
    }

    return [
        Number(smallestValue.toFixed(2)), 
        Number(greaterValue.toFixed(2)), 
        aboveAvg
    ]
}

interface StateData {
    state: string;
    invoice: number;
    percentage?: string;
}

export const exercicio4 = (): StateData[] => {
    const stateInvoiceArray: StateData[] = [
        {
            state: "SP",
            invoice: 67836.43
        }, 
        {
            state: "RJ",
            invoice: 36678.66
        }, 
        {
            state: "MG",
            invoice: 29229.88
        }, 
        {
            state: "ES",
            invoice: 27165.48
        }, 
        {
            state: "Outros",
            invoice: 19848.53
        }
    ]

    const total: number = stateInvoiceArray.reduce((a: number, b: StateData) => a + b.invoice, 0)
    
    return stateInvoiceArray.map((state: StateData) => ({
        ...state,
        percentage: ((state.invoice * 100) / total).toFixed(2)
    }))
}

export const exercicio5 = (input: string): string => {
    if (!input) {
        alert("String vazia")
        return ""
    }
    
    return input.split("").reverse().join("")
}