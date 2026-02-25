import { Component, computed, input } from '@angular/core';
import { Budget } from '../../core/models/budgets';
import { RouterLink } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-overview-budgets',
  imports: [RouterLink, ChartModule, CurrencyPipe],
  templateUrl: './overview-budgets.component.html',
  styleUrl: './overview-budgets.component.sass'
})
export class OverviewBudgetsComponent{
  budgets = input.required<Budget[]>();

  firstFourBudgets = computed(() => this.budgets().slice(0, 4));

  #labels = computed(() => this.firstFourBudgets().map(budget => budget.category));
  #values = computed(() => this.firstFourBudgets().map(budget => budget.maximum));
  #themes = computed(() => this.firstFourBudgets().map(budget => budget.theme));

  totalBudget = computed(() => this.budgets().reduce((acc, budget) => acc + budget.maximum, 0))


  chartSignal = computed(() => ({
      labels: this.#labels(),
      datasets: [
        {
          data: this.#values(),
          backgroundColor: this.#themes(),
          hoverBackgroundColor: ['#145D58', '#6ABDE8', '#C9A78C', '#525053'],
          borderWidth: 0
        }
      ]  
  }))

  chartOptions = {
    cutout: '60%',
    plugins: {
      legend: {
        display: false,
      }
    }
  }

}
