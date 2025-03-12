import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  imports: [CommonModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.sass'
})
export class InputFieldComponent {

  @Input() type: string = '';
  @Input() label: string = ''; 
  @Input() placeholder: string = '';
  @Input() imgPath: string = '';

  isDisabled: boolean = false;

  private _value: string = '';

  get value(): string {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
    this.onChange(val);
  }

  onChange = (val: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
