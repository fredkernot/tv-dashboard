
const arr1 = [1, 2, 3, 4, 5];


function total(prices: number[]): number {
    return prices.reduce((accumulator, currentValue ) => {
        console.log(accumulator)
        return accumulator + currentValue
    })
}

console.log(total(arr1))


// function total(prices: number[]): number {
//     return prices.reduce((accumulator, currentValue ) => accumulator + currentValue, 0);
// }