import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Budget } from '../core/models/budgets';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  apiUrl = '/data.json';
  http = inject(HttpClient);

  constructor() { }


  async createBudget(budget: Partial<Budget>): Promise<Budget> {
    const response = this.http.post<Budget>(`${this.apiUrl}`, budget);
    return firstValueFrom(response);
  }

  async editBudget(changes: Partial<Budget>): Promise<Budget> {
    const response = this.http.put<Budget>(`${this.apiUrl}/${changes.category}`, changes);
    return firstValueFrom(response);
  }

  async deleteBudget(category: string): Promise<void> {
    const response = this.http.delete<void>(`${this.apiUrl}/${category}`);
    return firstValueFrom(response);
  }
}
