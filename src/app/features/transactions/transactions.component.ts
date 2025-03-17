import { Component, computed, effect, ElementRef, inject, input, signal, viewChild } from '@angular/core';
import { InputFieldComponent } from "../../components/input-field/input-field.component";
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../core/models/transactions';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ResponsivePlaceholderDirective } from '../../core/responsive-placeholder.directive';
import { SelectComponent } from "../../components/select/select.component";

@Component({
  selector: 'app-transactions',
  imports: [InputFieldComponent, TableModule, CommonModule, SelectComponent],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent {

  transactions = signal<Transaction[]>([]);
  allTransactions = signal<Transaction[]>([]);
  activatedRoute = inject(ActivatedRoute);
  dataService = inject(DataService);
  
  sortList = signal<string[]>([
    'Latest',
    'Oldest',
    'A to Z',
    'Z to A',
    'Highest',
    'Lowest'
  ])

  category = signal<string>('All transactions');
  sortItem = signal<string>('Latest');

  constructor() {
    this.loadTransactions();
  }

  async loadTransactions() {
    try {
      const data = await firstValueFrom(this.activatedRoute.data);
      this.transactions.set(data['transactions']['transactions'])
      this.allTransactions.set(data['transactions']['transactions'])
      this.loadPersistedData();
    } catch (error) {
      console.error('Error loading transactions:', error);
    }
  }

  loadPersistedData() {
    const persistedData = localStorage.getItem('filteredTransactions');
    const persistedCategory = localStorage.getItem('selectedCategory');
    if (persistedData) {
      const transactions = JSON.parse(persistedData);
      this.transactions.set(transactions);
      if (transactions.length > 0 && persistedCategory) {
        this.category.set(persistedCategory);
      }
    }
  }

  transactionsCategory = computed(() => {
    const resp = this.allTransactions().map(transaction => transaction.category)
    const categories =  Array.from(new Set(resp));
    return [ 'All transactions',...categories]
  });

  onFilteredCategory(category: string) {
    this.category.set(category);

    if (category === 'All transactions') {
      this.transactions.set(this.allTransactions());
      localStorage.removeItem('filteredTransactions');
      localStorage.removeItem('selectedCategory');
    }
    else {
      const resp = this.allTransactions().filter(transaction => transaction.category === category);
      localStorage.setItem('filteredTransactions', JSON.stringify(resp));
      localStorage.setItem('selectedCategory', category);
      this.transactions.set(resp);
    }
  }

  
  searchInput = viewChild<ElementRef>("search");

  onSearch() {
    const query = this.searchInput()?.nativeElement.value;
    console.log('searching for:', query);
  }

}
