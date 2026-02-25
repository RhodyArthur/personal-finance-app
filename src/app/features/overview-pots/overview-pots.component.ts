import { Component, computed, input } from '@angular/core';
import { Pot } from '../../core/models/pots';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overview-pots',
  imports: [RouterLink],
  templateUrl: './overview-pots.component.html',
  styleUrl: './overview-pots.component.sass'
})
export class OverviewPotsComponent {
  pots = input.required<Pot[]>();

  firstFour = computed(() => this.pots().slice(0, 4));

  total = computed(() => this.pots().reduce((acc, pot) => acc + pot.total, 0))
}
