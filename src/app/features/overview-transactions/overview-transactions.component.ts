import { Component, computed, input } from '@angular/core';
import { Transaction } from '../../core/models/transactions';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-overview-transactions',
  imports: [RouterLink, CurrencyPipe, DatePipe],
  templateUrl: './overview-transactions.component.html',
  styleUrl: './overview-transactions.component.sass'
})
export class OverviewTransactionsComponent {
  transactions = input.required<Transaction[]>();

  firstFive = computed(() => this.transactions().slice(0, 5))

}
