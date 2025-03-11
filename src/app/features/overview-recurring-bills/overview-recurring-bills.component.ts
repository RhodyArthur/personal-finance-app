import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Transaction } from '../../core/models/transactions';

@Component({
  selector: 'app-overview-recurring-bills',
  imports: [RouterLink],
  templateUrl: './overview-recurring-bills.component.html',
  styleUrl: './overview-recurring-bills.component.sass'
})
export class OverviewRecurringBillsComponent {
  transactions = input.required<Transaction[]>();

  recurringBills = computed(() => this.transactions().filter((transaction) => transaction.recurring === true));

  paidBills = computed(() => this.recurringBills().filter((bill) => bill.amount > 0).reduce((acc, bill) => acc + bill.amount, 0))
}
