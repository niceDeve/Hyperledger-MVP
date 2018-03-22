import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { InsuranceData } from '../org.medichain.mvp';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class InsuranceDataService {

	
		private NAMESPACE: string = 'InsuranceData';
	



    constructor(private dataService: DataService<InsuranceData>) {
    };

    public getAll(): Observable<InsuranceData[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<InsuranceData> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<InsuranceData> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<InsuranceData> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<InsuranceData> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
