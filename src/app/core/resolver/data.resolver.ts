import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { DataService } from "../../services/data.service";

export const dataResolver: ResolveFn<unknown> = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const dataService = inject(DataService);
  try {
    const data = await dataService.loadAllData();
    const { balance, transactions, budgets, pots } = data;

    switch (route.routeConfig?.path) {
      case 'transactions':
        return { transactions };
      case 'budgets':
        return { budgets };
      case 'pots':
        return { pots };
      default:
        return data;
    }
  } catch (error) {
    console.error('Error loading data:', error);
    return {};
  }
}