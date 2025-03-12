import { Routes } from '@angular/router';
import { dataResolver } from './core/resolver/data.resolver';

export const routes: Routes = [
  {
    path: 'overview',
    loadComponent: () => import('./features/overview/overview.component').then(m => m.OverviewComponent)
  },
  {
    path: 'transactions',
    loadComponent: () => import('./features/transactions/transactions.component').then(m => m.TransactionsComponent),
    resolve: { transactions: dataResolver }
  },
  {
    path: 'budgets',
    loadComponent: () => import('./features/budgets/budgets.component').then(m => m.BudgetsComponent),
    resolve: { budgets: dataResolver }
  },
  {
    path: 'pots',
    loadComponent: () => import('./features/pots/pots.component').then(m => m.PotsComponent),
    resolve: { pots: dataResolver }
  },
  {
    path: 'recurring-bills',
    loadComponent: () => import('./features/recurring-bills/recurring-bills.component').then(m => m.RecurringBillsComponent)
  },
  {
    path: '',
    redirectTo: '/overview',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('./features/overview/overview.component').then(m => m.OverviewComponent)
  },
];
