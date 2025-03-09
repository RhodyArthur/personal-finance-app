import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Data } from '../core/models/data';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = '/data.json';

  http = inject(HttpClient);

  async loadAllData(): Promise<Data> {
    const data$ = this.http.get<Data>(this.apiUrl);
    return await firstValueFrom(data$)
  }
}
