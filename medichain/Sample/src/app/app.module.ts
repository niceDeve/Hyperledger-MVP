import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { ProfileInformationComponent } from './ProfileInformation/ProfileInformation.component';
import { PatientMasterDataComponent } from './PatientMasterData/PatientMasterData.component';
import { PrescriptionComponent } from './Prescription/Prescription.component';
import { ConsultationInformationComponent } from './ConsultationInformation/ConsultationInformation.component';
import { InsuranceDataComponent } from './InsuranceData/InsuranceData.component';
import { ImmunizationRecordComponent } from './ImmunizationRecord/ImmunizationRecord.component';

@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    ProfileInformationComponent,
		PatientMasterDataComponent,
		PrescriptionComponent,
		ConsultationInformationComponent,
		InsuranceDataComponent,
		
    ImmunizationRecordComponent
		
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
