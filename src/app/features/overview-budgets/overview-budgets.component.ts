import { ChangeDetectorRef, Component, computed, effect, inject, input, OnInit, PLATFORM_ID } from '@angular/core';
import { Budget } from '../../core/models/budgets';
import { RouterLink } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { CurrencyPipe, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-overview-budgets',
  imports: [RouterLink, ChartModule, CurrencyPipe],
  templateUrl: './overview-budgets.component.html',
  styleUrl: './overview-budgets.component.sass'
})
export class OverviewBudgetsComponent implements OnInit{
  budgets = input.required<Budget[]>();

  firstFourBudgets = computed(() => this.budgets().slice(0, 4));

  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);
   
  constructor(private cdr: ChangeDetectorRef) {}

  // configService = inject(AppConfigService);

  //   designerService = inject(DesignerService);


  //   themeEffect = effect(() => {
  //       if (this.configService.transitionComplete()) {
  //           if (this.designerService.preset()) {
  //               this.initChart();
  //           }
  //       }
  //   });

  labels = computed(() => this.firstFourBudgets().map(budget => budget.category));
  maximum = computed(() => this.firstFourBudgets().map(maxi => maxi.maximum));

  ngOnInit() {
    this.initChart();
  }
  

  initChart() {
    if(isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');

      this.data = {
        labels: this.labels(),
        datasets: [
          {
            data: this.maximum(),
            backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
          }
        ]
      };

      this.options = {
        cutout: '60%',
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        }
    };
    this.cdr.markForCheck()


    }
  }

}
