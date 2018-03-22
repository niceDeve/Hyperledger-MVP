import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { ProfileInformationComponent } from './ProfileInformation/ProfileInformation.component';
import { PatientMasterDataComponent } from './PatientMasterData/PatientMasterData.component';
import { PrescriptionComponent } from './Prescription/Prescription.component';
import { ConsultationInformationComponent } from './ConsultationInformation/ConsultationInformation.component';
import { InsuranceDataComponent } from './InsuranceData/InsuranceData.component';
import { ImmunizationRecordComponent } from './ImmunizationRecord/ImmunizationRecord.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'ProfileInformation', component: ProfileInformationComponent},
		
		{ path: 'PatientMasterData', component: PatientMasterDataComponent},
		
		{ path: 'Prescription', component: PrescriptionComponent},
		
		{ path: 'ConsultationInformation', component: ConsultationInformationComponent},
		
		{ path: 'InsuranceData', component: InsuranceDataComponent},
		
		{ path: 'ImmunizationRecord', component: ImmunizationRecordComponent},
		
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
