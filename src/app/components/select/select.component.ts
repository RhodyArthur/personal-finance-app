import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.sass'
})
export class SelectComponent {

  label = input.required<string>();
  value = model.required<string>();
  options = input.required<string[]>();

  onSelectedItem(item: string) {
    this.value.set(item);
  }
}
