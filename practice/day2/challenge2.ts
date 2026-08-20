
interface Transaction2 {
    id: string;
    amount: number;
    currency: string;
    category?: string;
}

const data2: Transaction2[] = [
    { id: 'tx_1', amount: 42, currency: 'GBP', category: 'dinner'},
    { id: 'tx_2', amount: 100, currency: 'GBP', category: 'travel'},
    { id: 'tx_3', amount: 13, currency: 'GBP'},
    { id: 'tx_4', amount: 53, currency: 'GBP', category: 'dinner'},
];
// generic functions work on any type

function firstOf<T>(items: T[]): T | undefined {
    return items[0];
}

function lastOf<T>(items: T[]): T | undefined {
    return items[items.length-1];
    
}

function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
    const result = [];
    for (const item of items) {
        result.push(item[key]);
    }
    return result;
    // return items.map((item) => item[key]);
}

console.log(firstOf(data2))
console.log(lastOf(data2))

console.log(pluck(data2, "amount"))

