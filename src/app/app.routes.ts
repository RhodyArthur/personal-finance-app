import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'overview',
    loadComponent: () => import('./features/overview/overview.component').then(m => m.OverviewComponent)
    },
    {
        path: 'transactions',
        loadComponent: () => import('./features/transactions/transactions.component').then(m => m.TransactionsComponent)
    },
    {
        path: 'budgets',
        loadComponent: () => import('./features/budgets/budgets.component').then(m => m.BudgetsComponent)
    },
    {
        path: 'pots',
        loadComponent: () => import('./features/pots/pots.component').then(m => m.PotsComponent)
    },
    {
        path: 'recurring bills',
        loadComponent: () => import('./features/recurring-bills/recurring-bills.component').then(m => m.RecurringBillsComponent)
    },
    {path: '**',
        loadComponent: () => import('./features/overview/overview.component').then(m => m.OverviewComponent)
    },
];
