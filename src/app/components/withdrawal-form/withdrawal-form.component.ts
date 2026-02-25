import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonComponent } from '../button/button.component';
import { MeterGroup } from 'primeng/metergroup';

@Component({
  selector: 'app-withdrawal-form',
  imports: [Dialog, ButtonComponent, MeterGroup],
  templateUrl: './withdrawal-form.component.html',
  styleUrl: './withdrawal-form.component.sass'
})
export class WithdrawalFormComponent {
  visible: boolean = false;

  value = [
    { label: 'Apps', color: '#34d399', value: 16 },
    { label: 'Messages', color: '#fbbf24', value: 8 },
    { label: 'Media', color: '#60a5fa', value: 24 },
    { label: 'System', color: '#c084fc', value: 10 }
];

  showDialog() {
    this.visible = true;
  }

}
