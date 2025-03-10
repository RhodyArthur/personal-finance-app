import { afterNextRender, Component, computed, inject, signal } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Balance } from '../../core/models/balance';
import { CurrencyPipe } from '@angular/common';
import { RecurringBillsComponent } from "../recurring-bills/recurring-bills.component";
import { Pot } from '../../core/models/pots';
import { OverviewPotsComponent } from "../overview-pots/overview-pots.component";
import { OverviewTransactionsComponent } from "../overview-transactions/overview-transactions.component";
import { Transaction } from '../../core/models/transactions';
import { Budget } from '../../core/models/budgets';
import { OverviewBudgetsComponent } from "../overview-budgets/overview-budgets.component";

@Component({
  selector: 'app-overview',
  imports: [CurrencyPipe, RecurringBillsComponent, OverviewPotsComponent, OverviewTransactionsComponent, OverviewBudgetsComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.sass'
})
export class OverviewComponent {
  #data = signal({});
  dataService = inject(DataService);
  balance = signal<Balance>({
    current: 0,
    income: 0,
    expenses: 0
  });

  pots = signal<Pot[]>([]);

  transactions = signal<Transaction[]>([]);

  budgets = signal<Budget[]>([]);

  constructor() {
    afterNextRender(() => this.loadData())
  }

  async loadData() {
    try {
        const data = await this.dataService.loadAllData();
        const {balance, transactions, budgets, pots} = data
        this.#data.set(data);
        this.balance.set(balance);
        this.transactions.set(transactions);
        this.pots.set(pots);
        this.budgets.set(budgets);
    }
    catch(err) {
      console.log(err);
    }
  }

  recurringBills = computed(() => {
    const data = this.transactions();
    return data.filter(d => d.recurring === true);
  })

}
