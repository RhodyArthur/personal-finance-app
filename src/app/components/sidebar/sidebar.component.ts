import { Component, inject } from '@angular/core';
import { SvgService } from '../../services/svg.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, TitleCasePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.sass'
})
export class SidebarComponent {

  svgService = inject(SvgService)

  items = this.svgService.items;
  
  activeIcon = this.svgService.getActiveIcon();

  setActiveIcon(icon: string) {
    this.svgService.setActiveIcon(icon);
  }

}
