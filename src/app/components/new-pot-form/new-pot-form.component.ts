import { Component, inject, signal } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { Dialog } from 'primeng/dialog';
import { colorOption } from '../../core/models/menu-item';
import { Select } from 'primeng/select';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-pot-form',
  imports: [ButtonComponent, Dialog, Select, FormsModule, ReactiveFormsModule],
  templateUrl: './new-pot-form.component.html',
  styleUrl: './new-pot-form.component.sass'
})
export class NewPotFormComponent {
visible: boolean = false;
selectedColor = signal<colorOption | null>(null);
fb = inject(FormBuilder);

colorOptions = signal<colorOption[]>([
  { name: 'Green', value: '#277c78' },
  { name: 'Yellow', value: '#f2cdac' },
  { name: 'Cyan', value: '#82c9d7' },
  { name: 'Navy', value: '#626070' },
  { name: 'Red', value: '#c94736' },
  { name: 'Purple', value: '#826cb0' },
  { name: 'Light Purple', value: '#af81ba' },
  { name: 'Turquoise', value: '#597c7c' },
  { name: 'Brown', value: '#93674f' },
  { name: 'Magenta', value: '#934f6f' },
  { name: 'Blue', value: '#3f82b2' },
  { name: 'Navy Grey', value: '#97a0ac' },
  { name: 'Army Green', value: '#7f9161' },
  { name: 'Gold', value: '#cab361' },
  { name: 'Orange', value: '#be6c49' }
]);


potForm = this.fb.group({
  potName: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]],
})

onColorSelected(color: colorOption) {
  this.selectedColor.set(color);
}


showDialog() {
  this.visible = true;
}
}
