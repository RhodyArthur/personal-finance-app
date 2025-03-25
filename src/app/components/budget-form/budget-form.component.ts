import { Component, computed, inject, input, signal } from '@angular/core';
import { SelectComponent } from "../select/select.component";
import { ButtonComponent } from "../button/button.component";
import { Select } from 'primeng/select';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { colorOption } from '../../core/models/menu-item';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../core/models/budgets';


@Component({
  selector: 'app-budget-form',
  imports: [ ButtonComponent, FormsModule, Dialog, ButtonModule, InputTextModule, Select, SelectComponent, ReactiveFormsModule ],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.sass'
})


export class BudgetFormComponent {
  categories = input.required<string[]>();
  selectedCategory = signal<string>('');
  selectedColor = signal<colorOption | null>(null);
  fb = inject(FormBuilder);
  visible: boolean = false;
  budget = input.required<Budget | null>();

  budgetService = inject(BudgetService);
  
  budgetForm = this.fb.group({
    category: new FormControl(''),
    maximum: new FormControl(''),
    theme: new FormControl('')
  })

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

  onCategorySelected(category: string) {
    this.selectedCategory.set(category);
  }

  onColorSelected(color: colorOption) {
    this.selectedColor.set(color);
  }

  showDialog() {
    this.budgetForm.reset();
  
    if (this.categories().length > 0) {
      const firstCategory = this.categories()[0];
      this.selectedCategory.set(firstCategory);
      this.budgetForm.patchValue({ category: firstCategory });
    }
    
    this.visible = true;
  }

  onAddBudget() {
    this.budgetForm.patchValue({
      category: this.selectedCategory(),
      theme: this.selectedColor()?.value
    })

    if (this.budgetForm.valid) {
      console.log(this.budgetForm.value);
      const {category, maximum, theme} = this.budgetForm.value;
      const numericMaximum = parseFloat(maximum!);
      const data = {category: category!, maximum: numericMaximum, theme: theme!};
      this.budgetService.createBudget(data).then(() => {

        console.log('Budget created successfully');
        this.visible = false;
      })
    }
  }

}
