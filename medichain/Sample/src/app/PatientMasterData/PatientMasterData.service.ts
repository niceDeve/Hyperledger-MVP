import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { PatientMasterData } from '../org.medichain.mvp';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class PatientMasterDataService {

	
		private NAMESPACE: string = 'PatientMasterData';
	



    constructor(private dataService: DataService<PatientMasterData>) {
    };

    public getAll(): Observable<PatientMasterData[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<PatientMasterData> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<PatientMasterData> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<PatientMasterData> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<PatientMasterData> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
