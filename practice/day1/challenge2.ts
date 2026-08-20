const arr2 = [10,20,3,45,5,987,13,1];

function summarise(numbers: number[]): { min: number; max: number; ave: number } {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const ave = numbers.reduce((acc, currVal) => acc + currVal, 0)/numbers.length;
    return { min, max, ave }
}

console.log(summarise(arr2))