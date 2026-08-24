
export function sum(numbers: number[]): number {
    return numbers.reduce((accumulator, currentValue ) => accumulator + currentValue, 0);
}

export function average(numbers: number[]): number {
    return numbers.reduce((acc, currVal) => acc + currVal, 0)/numbers.length;
}

