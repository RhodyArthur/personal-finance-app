import { Component, computed, effect, inject, signal } from '@angular/core';
import { Budget } from '../../core/models/budgets';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe, SlicePipe } from '@angular/common';
import { Transaction } from '../../core/models/transactions';
import { SelectComponent } from "../../components/select/select.component";
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { BudgetFormComponent } from "../../components/budget-form/budget-form.component";
import { ButtonComponent } from "../../components/button/button.component";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';


@Component({
  selector: 'app-budgets',
  imports: [CurrencyPipe, RouterLink, DatePipe, SelectComponent, SlicePipe, Menu, ButtonModule, MatDialogModule, ButtonComponent],
  templateUrl: './budgets.component.html',
  styleUrl: './budgets.component.sass'
})


export class BudgetsComponent {

  budgets = signal<Budget[]>([]);
  transactions = signal<Transaction[]>([]);
  activatedRoute = inject(ActivatedRoute);

  months = signal<string[]>([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]);

  selectedMonth = signal<number>(new Date().getMonth() + 1);
  selectedMonthString: string = this.selectedMonth().toString();

  items: MenuItem[] | undefined;

  readonly dialog = inject(MatDialog);


  constructor() {
    this.loadBudgets();
    // effect(() => console.log(this.themes()))
  }

  ngOnInit() {
    this.items = [
      {label: 'Edit Budget'},
      {label: 'Delete Budget'},
    ]
  }

  async loadBudgets() {
    try {
      const response = await firstValueFrom(this.activatedRoute.data);
      this.budgets.set(response['budgets']['budgets']);
      this.transactions.set(response['budgets']['transactions']);
    }
    catch(err) {
      console.error('Error loading budgets', err);
    }
  }

  transactionsByCategory = computed(() => {
    const selectedMonthId = this.selectedMonth();

    return this.budgets().map(budget => {
      const filteredTransactions = this.transactions().filter(transaction => {
        const transactionMonth = new Date(transaction.date).getMonth() + 1;
        return transaction.category === budget.category && transactionMonth === selectedMonthId;
      })

      const totalSpent = filteredTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
      const remaining = budget.maximum - (-totalSpent);

      return {
        budget,
        transactions: filteredTransactions,
        totalSpent,
        remaining
      }
    })
  });

  transactionsCategory = computed(() => {
    const resp = this.transactions().map(transaction => transaction.category)
    return Array.from(new Set(resp));
  });

  
  onMonthChange(monthString: string) {  
    const monthMap: { [key: string]: number } = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12
    };
  
    const month = monthMap[monthString];  
    if (month) {
      this.selectedMonth.set(month);
    } else {
      console.error('Invalid Month String:', monthString);
    }
  }

  getProgressWidth(totalSpent: number, maximum: number): number {
    return Math.min(100, (Math.abs(totalSpent) / maximum) * 100);
  }

 

  openDialog() {
    const categories = this.transactionsCategory();
    this.dialog.open(BudgetFormComponent, {
      data: {
        categories: categories
      }
  })
}

}
