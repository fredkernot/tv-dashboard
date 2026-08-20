
interface Transaction {
    id: string;
    amount: number;
    currency: string;
    date: string;
}

function formatTransaction(t: Transaction): string {
    return `${t.id}: ${t.amount.toFixed(2)} ${t.currency} on ${t.date}`
}

console.log(formatTransaction({ id: 'tx_1', amount: 42.51, currency: 'GBP', date: '2026-08-18'}))