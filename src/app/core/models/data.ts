import { Balance } from "./balance";
import { Budget } from "./budgets";
import { Pot } from "./pots";
import { Transaction } from "./transactions";

export interface Data {
    balance: Balance,
    transactions: Transaction[],
    budgets: Budget[],
    pots: Pot[]
}
