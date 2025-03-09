import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SvgService } from '../../services/svg.service';

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.sass'
})
export class SidebarComponent {

  svgService = inject(SvgService)

  items = this.svgService.items;

}
