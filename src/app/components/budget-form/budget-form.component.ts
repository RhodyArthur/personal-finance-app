import { Component, inject, Inject, signal } from '@angular/core';
import { SelectComponent } from "../select/select.component";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ButtonComponent } from "../button/button.component";
import { Select } from 'primeng/select';
import { FormBuilder, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-budget-form',
  imports: [ SelectComponent, ButtonComponent, Select, FormsModule],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.sass'
})
export class BudgetFormComponent {
  selectedCategory = signal<string>('');
  selectedColor = signal<string>('');
  fb = inject(FormBuilder);
  
  budgetForm = this.fb.group({
    category: [''],
    maximum: [''],
    theme: ['']
  })

  colorOptions = signal<Array<{name: string, value: string}>>([
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



  constructor(@Inject(MAT_DIALOG_DATA) public data: { categories: string[] }) {
    console.log('Received Categories:', this.data.categories);
  }

  onCategorySelected(category: string) {
    this.selectedCategory.set(category);
  }

  onColorSelected(color: string) {
    this.selectedColor.set(color);
  }

}
