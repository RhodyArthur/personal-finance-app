import { Balance } from "./balance";
import { Budgets } from "./budgets";
import { Pots } from "./pots";
import { Transactions } from "./transactions";

export interface Data {
    balance: Balance,
    transactions: Transactions,
    budgets: Budgets,
    pots: Pots
}
