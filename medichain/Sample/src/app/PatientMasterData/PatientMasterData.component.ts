import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PatientMasterDataService } from './PatientMasterData.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-PatientMasterData',
	templateUrl: './PatientMasterData.component.html',
	styleUrls: ['./PatientMasterData.component.css'],
  providers: [PatientMasterDataService]
})
export class PatientMasterDataComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          masterDataId = new FormControl("", Validators.required);
        
  
      
          patientPrescriptions = new FormControl("", Validators.required);
        
  
      
          patientImmunizationHistory = new FormControl("", Validators.required);
        
  
      
          patientConsultationHistory = new FormControl("", Validators.required);
        
  
      
          patientInsuranceInfo = new FormControl("", Validators.required);
        
  


  constructor(private servicePatientMasterData:PatientMasterDataService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          masterDataId:this.masterDataId,
        
    
        
          patientPrescriptions:this.patientPrescriptions,
        
    
        
          patientImmunizationHistory:this.patientImmunizationHistory,
        
    
        
          patientConsultationHistory:this.patientConsultationHistory,
        
    
        
          patientInsuranceInfo:this.patientInsuranceInfo
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.servicePatientMasterData.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.medichain.mvp.PatientMasterData",
      
        
          "masterDataId":this.masterDataId.value,
        
      
        
          "patientPrescriptions":this.patientPrescriptions.value,
        
      
        
          "patientImmunizationHistory":this.patientImmunizationHistory.value,
        
      
        
          "patientConsultationHistory":this.patientConsultationHistory.value,
        
      
        
          "patientInsuranceInfo":this.patientInsuranceInfo.value
        
      
    };

    this.myForm.setValue({
      
        
          "masterDataId":null,
        
      
        
          "patientPrescriptions":null,
        
      
        
          "patientImmunizationHistory":null,
        
      
        
          "patientConsultationHistory":null,
        
      
        
          "patientInsuranceInfo":null
        
      
    });

    return this.servicePatientMasterData.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "masterDataId":null,
        
      
        
          "patientPrescriptions":null,
        
      
        
          "patientImmunizationHistory":null,
        
      
        
          "patientConsultationHistory":null,
        
      
        
          "patientInsuranceInfo":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.medichain.mvp.PatientMasterData",
      
        
          
        
    
        
          
            "patientPrescriptions":this.patientPrescriptions.value,
          
        
    
        
          
            "patientImmunizationHistory":this.patientImmunizationHistory.value,
          
        
    
        
          
            "patientConsultationHistory":this.patientConsultationHistory.value,
          
        
    
        
          
            "patientInsuranceInfo":this.patientInsuranceInfo.value
          
        
    
    };

    return this.servicePatientMasterData.updateAsset(form.get("masterDataId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.servicePatientMasterData.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.servicePatientMasterData.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "masterDataId":null,
          
        
          
            "patientPrescriptions":null,
          
        
          
            "patientImmunizationHistory":null,
          
        
          
            "patientConsultationHistory":null,
          
        
          
            "patientInsuranceInfo":null 
          
        
      };



      
        if(result.masterDataId){
          
            formObject.masterDataId = result.masterDataId;
          
        }else{
          formObject.masterDataId = null;
        }
      
        if(result.patientPrescriptions){
          
            formObject.patientPrescriptions = result.patientPrescriptions;
          
        }else{
          formObject.patientPrescriptions = null;
        }
      
        if(result.patientImmunizationHistory){
          
            formObject.patientImmunizationHistory = result.patientImmunizationHistory;
          
        }else{
          formObject.patientImmunizationHistory = null;
        }
      
        if(result.patientConsultationHistory){
          
            formObject.patientConsultationHistory = result.patientConsultationHistory;
          
        }else{
          formObject.patientConsultationHistory = null;
        }
      
        if(result.patientInsuranceInfo){
          
            formObject.patientInsuranceInfo = result.patientInsuranceInfo;
          
        }else{
          formObject.patientInsuranceInfo = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "masterDataId":null,
        
      
        
          "patientPrescriptions":null,
        
      
        
          "patientImmunizationHistory":null,
        
      
        
          "patientConsultationHistory":null,
        
      
        
          "patientInsuranceInfo":null 
        
      
      });
  }

}
