import { afterNextRender, Component, inject, signal } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Data } from '../../core/models/data';
import { Balance } from '../../core/models/balance';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-overview',
  imports: [CurrencyPipe],
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

  constructor() {
    afterNextRender(() => this.loadData())
  }

  async loadData() {
    try {
        const data = await this.dataService.loadAllData();
        this.#data.set(data);
        this.balance.set(data.balance);
    }
    catch(err) {
      console.log(err);
    }
  }

}
