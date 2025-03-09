import { Injectable } from '@angular/core';
import { NavItems } from '../core/models/nav-items';

@Injectable({
  providedIn: 'root'
})
export class SvgService {
  #navList: NavItems[] = [
    {name: 'overview', path: 'assets/images/icon-nav-overview.svg'},
    {name: 'transaction', path: 'assets/images/icon-nav-transactions.svg'},
    {name: 'budgets', path: 'assets/images/icon-nav-budgets.svg'},
    {name: 'pots', path: 'assets/images/icon-nav-pots.svg'},
    {name: 'recurring bills', path: 'assets/images/icon-nav-recurring-bills.svg'}
  ]

  get items(): NavItems[] {
    return this.#navList; 
  }

  
}
