export interface Budgets {
    budgets: Budget[]
}

export interface Budget {
    category: string;
    maximum: number;
    theme: string;
}
