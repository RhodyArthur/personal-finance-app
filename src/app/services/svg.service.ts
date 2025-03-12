import { Injectable, signal } from '@angular/core';
import { NavItems } from '../core/models/nav-items';

@Injectable({
  providedIn: 'root'
})
export class SvgService {
  #navList: NavItems[] = [
    {name: 'overview', path: 'assets/images/icon-nav-overview.svg'},
    {name: 'transactions', path: 'assets/images/icon-nav-transactions.svg'},
    {name: 'budgets', path: 'assets/images/icon-nav-budgets.svg'},
    {name: 'pots', path: 'assets/images/icon-nav-pots.svg'},
    {name: 'recurring-bills', path: 'assets/images/icon-nav-recurring-bills.svg'}
  ]

  get items(): NavItems[] {
    return this.#navList; 
  }

  active = signal<string | null>( typeof window !== 'undefined' && localStorage.getItem('active-icon') 
  ? localStorage.getItem('active-icon') 
  : 'overview');

  setActiveIcon(icon: string) {
    this.active.set(icon);
    if (typeof window !== 'undefined') {
      localStorage.setItem('activeIcon', icon);
    }
  }

  getActiveIcon(): string | null {
    return this.active();
  }
}
