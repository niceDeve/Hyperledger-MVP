import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ConsultationInformation } from '../org.medichain.mvp';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ConsultationInformationService {

	
		private NAMESPACE: string = 'ConsultationInformation';
	



    constructor(private dataService: DataService<ConsultationInformation>) {
    };

    public getAll(): Observable<ConsultationInformation[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<ConsultationInformation> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<ConsultationInformation> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<ConsultationInformation> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<ConsultationInformation> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
