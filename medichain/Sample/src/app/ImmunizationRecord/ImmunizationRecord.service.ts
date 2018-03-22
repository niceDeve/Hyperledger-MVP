import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ImmunizationRecord } from '../org.medichain.mvp';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ImmunizationRecordService {

	
		private NAMESPACE: string = 'ImmunizationRecord';
	



    constructor(private dataService: DataService<ImmunizationRecord>) {
    };

    public getAll(): Observable<ImmunizationRecord[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<ImmunizationRecord> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<ImmunizationRecord> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<ImmunizationRecord> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<ImmunizationRecord> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
