import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { ButtonComponent } from "../button/button.component";
import { Budget } from '../../core/models/budgets';

@Component({
  selector: 'app-delete-modal',
  imports: [Dialog, ButtonModule, ButtonComponent],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.sass'
})
export class DeleteModalComponent {
  visible: boolean = false;
  selectedBudget = input<Budget | null>();

  showDialog() {
    console.log('clicked dialog')
      this.visible = true;
  }
}
