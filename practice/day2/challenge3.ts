interface Transaction3 {
    id: string;
    amount: number;
    currency: string;
    category?: string;
}

type TransactionSummary = Pick<Transaction3, "id" | "amount">;

type UpdateTransactionInput = Partial<Transaction3>


function applyUpdate(original: Transaction3, update: UpdateTransactionInput): Transaction3 {
    return { ...original, ...update }
}

const data3: Transaction3 = { id: 'tx_1', amount: 42, currency: 'GBP', category: 'dinner'};

const sum_data: TransactionSummary = { id: 'tx_2', amount: 100}

console.log()

console.log(applyUpdate(data3, { amount: 52}))
// console.log(applyUpdate(sum_data, { id: "tx_3"}))