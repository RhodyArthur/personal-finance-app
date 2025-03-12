import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { InputFieldComponent } from "../../components/input-field/input-field.component";
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../core/models/transactions';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-transactions',
  imports: [InputFieldComponent, TableModule, CommonModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent {

  transactions = signal<Transaction[]>([]);
  route = inject(ActivatedRoute);
  dataService = inject(DataService);

  constructor() {
    this.loadTransactions();
  }

  async loadTransactions() {
    try {
      const data = await firstValueFrom(this.route.data);
      if (data && Array.isArray(data['transactions'])) {
        this.transactions.set(data['transactions']);
      }
    } catch (error) {
      console.error('Error loading transactions:', error);
    }
  }


}
