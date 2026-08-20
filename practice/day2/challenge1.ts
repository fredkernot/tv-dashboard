
interface Transaction1 {
    id: string;
    amount: number;
    currency: string;
    category?: string;
}

const data: Transaction1[] = [
    { id: 'tx_1', amount: 42, currency: 'GBP', category: 'dinner'},
    { id: 'tx_2', amount: 100, currency: 'GBP', category: 'travel'},
    { id: 'tx_3', amount: 13, currency: 'GBP'},
    { id: 'tx_4', amount: 53, currency: 'GBP', category: 'dinner'},
];

function filterByCategory(transactions: Transaction1[], category: string): Transaction1[] {
    const result: Transaction1[] = [];
    for (const t of transactions) {
        if (t.category === category) {
            result.push(t)
        }
    }
    // return transactions.filter((t) => t.category === category);
    return result
}

console.log(filterByCategory(data, 'dinner'))
console.log(filterByCategory(data, 'travel'))