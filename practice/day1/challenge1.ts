
const arr = [1, 2, 3, 4, 5];


function total(prices: number[]): number {
    return prices.reduce((accumulator, currentValue ) => accumulator + currentValue, 0);
}

console.log(total(arr))