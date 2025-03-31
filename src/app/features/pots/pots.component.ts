import { Component, computed, effect, inject, signal } from '@angular/core';
import { Pot } from '../../core/models/pots';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { NewPotFormComponent } from "../../components/new-pot-form/new-pot-form.component";
import { WithdrawalFormComponent } from "../../components/withdrawal-form/withdrawal-form.component";


@Component({
  selector: 'app-pots',
  imports: [CurrencyPipe, NewPotFormComponent, WithdrawalFormComponent],
  templateUrl: './pots.component.html',
  styleUrl: './pots.component.sass'
})
export class PotsComponent {
  pots = signal<Pot[]>([]);
  activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.loadPots();

    // effect(() => console.log(this.pots()))
  }

  async loadPots() {
    try {
      const response = await firstValueFrom(this.activatedRoute.data);
      this.pots.set(response['pots']['pots'])
    }
    catch(err) {
      console.log('Error loading pots', err)
    }
  }

  allPots = computed(() => {
    return this.pots().map(pot => {
      const {total ,target} = pot
      const percentage =  target > 0 ? Math.min(100, (total / target) * 100) : 0

      return {
        pot,
        percentage: percentage.toFixed(2)
      }
    })
  })
}
