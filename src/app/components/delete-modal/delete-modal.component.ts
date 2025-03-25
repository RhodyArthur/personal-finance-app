import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-delete-modal',
  imports: [Dialog, ButtonModule, ButtonComponent],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.sass'
})
export class DeleteModalComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
