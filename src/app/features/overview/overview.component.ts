import { afterNextRender, Component, inject, signal } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Data } from '../../core/models/data';
import { Balance } from '../../core/models/balance';
import { CurrencyPipe } from '@angular/common';
import { PotsComponent } from "../pots/pots.component";
import { TransactionsComponent } from "../transactions/transactions.component";
import { BudgetsComponent } from "../budgets/budgets.component";
import { RecurringBillsComponent } from "../recurring-bills/recurring-bills.component";
import { Pot } from '../../core/models/pots';
import { OverviewPotsComponent } from "../overview-pots/overview-pots.component";

@Component({
  selector: 'app-overview',
  imports: [CurrencyPipe, TransactionsComponent, BudgetsComponent, RecurringBillsComponent, OverviewPotsComponent],
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

  constructor() {
    afterNextRender(() => this.loadData())
  }

  async loadData() {
    try {
        const data = await this.dataService.loadAllData();
        const {balance, transactions, budgets, pots} = data
        this.#data.set(data);
        this.balance.set(balance);
        this.pots.set(pots);
    }
    catch(err) {
      console.log(err);
    }
  }

}
