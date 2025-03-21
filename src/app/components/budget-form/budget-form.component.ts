import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-budget-form',
  imports: [ButtonModule, Dialog, ButtonComponent],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.sass'
})
export class BudgetFormComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

}
