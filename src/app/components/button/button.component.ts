import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass'
})
export class ButtonComponent {
  @Input() color: string = '#201f24';
  @Input() textColor: string = '#ffffff';
  @Input() text: string = '';

}
