

function parseAmount(input: string | number): number {
    if (typeof input === "string") {
        const num = parseInt(input)
        return num
    }
    return input
}

console.log(parseAmount("250.50"))
console.log(parseAmount(800.75))
